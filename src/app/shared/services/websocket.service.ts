// src\app\services\websocket.service.ts
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, filter, first, forkJoin, mergeMap, tap } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { FeedContainer } from '../models/feed-container.model';
import { NotizieState } from '../store/notizie.reducer';
import NotizieActionTypes from '../store/notizie-action-types';
import {getSingleFeed} from '../store/notizie-selectors';
@Injectable({providedIn: 'root'})
export class WebsocketService {
  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8081');

  constructor(private store: Store<NotizieState>){}

  getFeeds() {
    this.myWebSocket.asObservable().pipe(
      mergeMap((feeds: FeedContainer) => {
        if(feeds?.items?.length) {
          return forkJoin(feeds.items.map(item => {
            return this.store.pipe(
              select(getSingleFeed(item.guid)),
              tap((loaded) => {
                if (!loaded) {
                  this.store.dispatch(NotizieActionTypes.caricaFeed({payload: item}));
                }
              }),
              filter((loaded) => !!loaded),
              first()
            )
          }));
        }
        return EMPTY;
      })
    ).subscribe();
  }
}
