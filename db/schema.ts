// src/db/schema.ts
import { pgTable, uuid, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  source: text('source').notNull(), // 'google' | 'facebook'
  authorName: text('author_name'),
  authorPhoto: text('author_photo'),
  rating: integer('rating'),
  text: text('text'),
  date: timestamp('date'),
  reviewUrl: text('review_url'),
  externalId: text('external_id').unique(),
})