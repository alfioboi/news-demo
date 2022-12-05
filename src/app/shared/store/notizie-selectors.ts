import { createSelector } from '@ngrx/store';
import { Feed } from '../models/feed.model';
import { notizieState, notizieState as NotizieState } from './notizie.reducer';

export const selectAllFeeds = (state: NotizieState) => state.feeds;
export const getFeedByGuid = createSelector(
  selectAllFeeds,
  (res: Feed[], props: { guid: string }) => res?.find((v) => v.guid === props.guid)
);
