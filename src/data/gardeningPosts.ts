export type GardenPost = {
  id: string
  title: string
  date: string
  excerpt?: string
  body: string
  photos?: string[]
}

const posts: GardenPost[] = [
  {
    id: 'spring-2025-planting-1',
    title: 'Spring 2025: First Plantings',
    date: 'March 2025',
    excerpt: 'First notes from the 2025 gardening season.',
    body: `I started the garden in early March 2025 with a few cool-weather crops: peas, spinach, and lettuce. The soil was amended with compost from last year and I set up a small cold frame to protect the seedlings from late frosts.

Over the next few weeks I observed slow but steady growth. The peas reached the trellis by April and the spinach provided several harvests for salads. I also trialed a small herb patch with basil and cilantro; basil did well once temperatures warmed, while cilantro bolted early.

Lessons learned: add more compost in the back half of the bed and try starting cilantro indoors to delay bolting.`,
    photos: [],
  },
]

export default posts
