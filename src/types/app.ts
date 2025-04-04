export interface App {
  id: string
  name: string
  description: string
  imageUrl: string
  url: string
  votes: number
  maker: {
    id: string
    name: string
    avatarUrl: string
  }
  createdAt: Date
  tags: string[]
  badges: ('new' | 'trending' | 'top')[]
} 