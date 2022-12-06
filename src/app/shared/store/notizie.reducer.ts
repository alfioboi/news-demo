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
    if(!state?.feeds?.find(i => i.guid === action.payload.guid)) {
      return {...state, feeds: [...state.feeds, action.payload]};
    }
    return {...state};
  })
)

