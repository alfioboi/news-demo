import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { Feed } from '../../models/feed.model';
import { selectAllFeeds, selectFeeds } from '../../store/notizie-selectors';
import { notizieState } from '../../store/notizie.reducer';

@Component({
  selector: 'app-elenco-notizie',
  templateUrl: './elenco-notizie.component.html',
  styleUrls: ['./elenco-notizie.component.scss'],
})
export class ElencoNotizieComponent implements OnInit {
  elencoNotizie$: Observable<Feed[]> = of([]);
  constructor(private store: Store<notizieState>) {}
  ngOnInit(): void {
    this.elencoNotizie$ = this.store.pipe(
      tap(state => console.log(`the state`, state )),
      map(state => state.feeds),
      tap((feeds) => {
        console.log(`The feeds`, feeds);
      })
    );
  }
}
