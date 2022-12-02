import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import NotizieActionTypes from './notizie-action-types';

@Injectable()
export class NotizieEffects {
  http: any;
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  leggiUltimeNotizie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotizieActionTypes.leggiUltimeNotizie),
      mergeMap(() =>
        this.httpClient
          .get(`https://api.bing.microsoft.com/api/v7/news/search?q=us+politics`)
          .pipe(
            map((news) => {
              console.log(news, `News`);
              return NotizieActionTypes.ultimeNotizieLette({ payload: news })}
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );
}
