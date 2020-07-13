export interface Post {
  id: number;
  date_gmt: string;
  slug: string;
  title: Guid;
  content: Content;
  excerpt: Content;
  categories: number[];
  _links: Links;
  video_embed: string;

}

interface Links {
  self: Self[];
  author: Author[];
  'wp:featuredmedia': Author[];
}


interface Author {
  embeddable: boolean;
  href: string;
}

interface Self {
  href: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Guid {
  rendered: string;
}