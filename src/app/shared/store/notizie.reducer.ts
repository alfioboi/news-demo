import { createReducer, on } from "@ngrx/store";
import { Feed } from "../models/feed.model";
import NotizieActionTypes from "./notizie-action-types";

export interface NotizieState {
  feeds: Feed[]
}
const initialNotizieState: NotizieState = ({
  feeds: []
});

export const notizieReducer = createReducer(
  initialNotizieState,
  on(NotizieActionTypes.caricaFeed, (state, action) => {
    return {...state, feeds: [...state.feeds, action.payload]};
  })
)

