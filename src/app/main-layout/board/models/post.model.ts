export const POST_TYPES = ['Rent', 'Buy & Sell', 'Events', 'Travel'] as const;
export type PostType = (typeof POST_TYPES)[number];

export interface PostModel {
  id?: number;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  ownerId: number;
  postType?: PostType;
  location?: string;
}
