import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import NotizieActionTypes from './notizie-action-types';

@Injectable()
export class NotizieEffects {
  http: any;
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

}
