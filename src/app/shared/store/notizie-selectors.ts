import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Feed } from '../models/feed.model';
import { NotizieState } from './notizie.reducer';

export const appState = createFeatureSelector<NotizieState>('news');
export const selectAllFeeds = createSelector(appState, (previousState) => previousState.feeds);
export const getFeedByGuid = createSelector(selectAllFeeds, (feeds: Feed[], props: {guid: string}) => feeds?.find((v: Feed) => v.guid === props.guid));

