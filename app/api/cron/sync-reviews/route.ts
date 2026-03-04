// src/app/api/cron/sync-reviews/route.ts
import { db } from "@/db";
import { reviews } from "@/db/schema";

const PLACE_ID = process.env.GOOGLE_PLACE_ID!;
const SERPAPI_KEY = process.env.SERPAPI_KEY!;

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const params = new URLSearchParams({
    engine: "google_maps_reviews",
    place_id: PLACE_ID,
    api_key: SERPAPI_KEY,
    sort_by: "newestFirst",
    hl: "pl",
  });

  const res = await fetch(`https://serpapi.com/search.json?${params}`);
  const data = await res.json();

  console.log("SerpApi response:", JSON.stringify(data, null, 2)); // dodaj to
  console.log("Status:", res.status);

  const rawReviews = data?.reviews ?? [];

  console.log(`Fetched ${rawReviews.length} reviews`);

  if (!rawReviews.length) {
    return Response.json({ message: "No reviews found" });
  }

  const mapped = rawReviews.map((r: any) => ({
    source: "google",
    authorName: r.user?.name,
    authorPhoto: r.user?.thumbnail,
    rating: r.rating,
    text: r.snippet,
    date: r.iso_date ? new Date(r.iso_date) : null,
    reviewUrl: r.link,
    externalId: r.review_id,
  }));

  await db
    .insert(reviews)
    .values(mapped)
    .onConflictDoNothing({ target: reviews.externalId });

  return Response.json({ synced: mapped.length });
}
