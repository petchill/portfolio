export interface BlogCard {
  title: string;
  thumbnailUrl: string;
  href: string;
  rotate: string;
  bgColor: string;
  textColor: string;
}

export interface MediumItem {
  title: string;
  link: string;
  thumbnail?: string;
  description?: string;
}

export interface MediumFeedResponse {
  status: string;
  items?: MediumItem[];
}
