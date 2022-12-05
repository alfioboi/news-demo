import { createReducer, on } from "@ngrx/store";
import { Feed } from "../models/feed.model";
import NotizieActionTypes from "./notizie-action-types";
import { cloneDeep } from 'lodash'

export interface notizieState {
  feeds: Feed[]
}
const initialNotizieState: notizieState = {
  feeds: []
};

export const notizieReducer = createReducer(
  initialNotizieState,
  on(NotizieActionTypes.caricaFeed, (state, action) => {
    const newState = cloneDeep(state);
    if(! state?.feeds?.find(i => i.guid === action.payload.guid)) {
      newState?.feeds ? newState.feeds?.push(action.payload): newState.feeds = [action.payload];
    }
    return newState;
  })
)

