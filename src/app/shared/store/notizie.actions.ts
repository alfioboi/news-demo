import { createAction, props } from "@ngrx/store";

export const leggiUltimeNotizie = createAction(`[news]: carica news`);
export const ultimeNotizieLette = createAction(`[news]: UltimeNotizieLette`, props<{ payload: any}>());
