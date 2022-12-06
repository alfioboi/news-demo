import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { map, Observable, of, tap } from 'rxjs';
import { Feed } from '../../models/feed.model';
import { selectAllFeeds } from '../../store/notizie-selectors';
import { NotizieState } from '../../store/notizie.reducer';

@Component({
  selector: 'app-elenco-notizie',
  templateUrl: './elenco-notizie.component.html',
  styleUrls: ['./elenco-notizie.component.scss'],
})
export class ElencoNotizieComponent implements OnInit {
  elencoNotizie$: Observable<Feed[]> = of([]);
  constructor(private store: Store<NotizieState>) {}
  ngOnInit(): void {
    this.elencoNotizie$ = this.store.pipe(
      select(selectAllFeeds),
      map((feeds: Feed[]) => cloneDeep(feeds).sort((a, b) => a.isoDate > b.isoDate ? -1 : 1)),
      map((feeds: Feed[]) => cloneDeep(feeds).slice(0, 8))
    );
  }
}
