export interface Categories {
    id: number;
    link: string;
    name: string;
    slug: string;
    parent: number;
    _links: Links;
}

interface Links {
    self: Self[];
    'wp:post_type': Self[];
}

interface Self {
    href: string;
}