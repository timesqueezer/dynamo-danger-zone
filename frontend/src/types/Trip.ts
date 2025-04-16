// Shared type for trip/destination objects
export interface Trip {
  id: string;
  name: string;
  description: string;
  skull_rating: number;
  image_url: string;
  danger: string[];
  why_go: string;
  country?: string;
  booked?: boolean;
}
