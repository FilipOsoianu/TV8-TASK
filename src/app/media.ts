export interface Media {
    id: number;
    date: string;
    guid: Guid;
    slug: string;
    title: Guid;
    meta: any[];
    description: Guid;
    caption: Guid;
    media_type: string;
    mime_type: string;
    media_details: Mediadetails;
    post: number;
    source_url: string;
    _links: Links;
  }
  
  interface Links {
    self: Self[];
    collection: Self[];
    about: Self[];
  }
  
  
  interface Self {
    href: string;
  }
  
  interface Mediadetails {
    width: number;
    height: number;
    file: string;
    sizes: Sizes;
  }
  
  
  interface Sizes {
    medium: Medium;
    large: Medium;
    thumbnail: Medium;
    medium_large: Medium;
    'post-thumbnail': Medium;
    venosa_small: Medium;
    venosa_grid: Medium;
    venosa_grid_masonry: Medium;
    venosa_wide: Medium;
    venosa_single: Medium;
    full: Medium;
  }
  
  interface Medium {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
  }
  
  interface Guid {
    rendered: string;
  }