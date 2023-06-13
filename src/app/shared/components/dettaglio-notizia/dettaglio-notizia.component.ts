import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feed } from '../../models/feed.model';
import {getSingleFeed} from '../../store/notizie-selectors';
import { NotizieState } from '../../store/notizie.reducer';

@Component({
  selector: 'app-dettaglio-notizia',
  templateUrl: './dettaglio-notizia.component.html',
  styleUrls: ['./dettaglio-notizia.component.scss']
})
export class DettaglioNotiziaComponent {
  notiziaCorrente$: Observable<Feed | undefined>;
  guidParameter: string = (this.activatedRoute.snapshot.params as any).guid;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<NotizieState>
  ) {
    this.notiziaCorrente$ = this.store.pipe(
      select(getSingleFeed(this.guidParameter))
    )
  }
}
