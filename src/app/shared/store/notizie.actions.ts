import { createAction, props } from "@ngrx/store";
import { Feed } from "../models/feed.model";

export const caricaFeed = createAction(`[feeds]: carica feed`, props<{ payload: Feed}>());
