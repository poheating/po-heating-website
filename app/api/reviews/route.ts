// app/api/reviews/route.ts
import { db } from '@/db'
import { reviews } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'

export async function GET() {
  const [googleReviews, facebookReviews] = await Promise.all([
    db.select().from(reviews).where(eq(reviews.source, 'google')).orderBy(desc(reviews.rating)).limit(7),
    db.select().from(reviews).where(eq(reviews.source, 'facebook')).orderBy(desc(reviews.rating)).limit(3),
  ])

  // pomieszaj — co trzecia opinia to FB
  const mixed = [...googleReviews]
  facebookReviews.forEach((review, i) => {
    mixed.splice((i + 1) * 3, 0, review)
  })

  return Response.json(mixed)
}