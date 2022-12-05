import { Feed } from "./feed.model";

export interface FeedContainer {
  copyright: string,
  description: string,
  generator: string,
  items: Feed[],
  language: string,
  lastBuildDate: string,
  link: string,
  title: string,
  webMaster: string
}
