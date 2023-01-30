export interface VelogType {
  copyright: string;
  description: string;
  docs: string;
  feedUrl: string;
  generator: string;
  image: {
    link: string;
    url: string;
    title: string;
  };
  items: VelogPostType[];
  lastBuildDate: string;
}

export interface VelogPostType {
  title: string;
  isoDate: string;
  link: string;
  guid: string;
  contentSnippet: string;
  content: string;
}
