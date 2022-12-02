import { createReducer, on } from "@ngrx/store";
import NotizieActionTypes from "./notizie-action-types";
import { leggiUltimeNotizie } from "./notizie-actions";

export interface notizieState {
  news?: unknown
}
const initialNotizieState: notizieState = {};

export const notizieReducer = createReducer(
  initialNotizieState,
  on(NotizieActionTypes.leggiUltimeNotizie, (state, action) => {
    return state;
  })
)
