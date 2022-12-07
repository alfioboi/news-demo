import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'lodash';
import { Observable } from 'rxjs';
import { Feed } from '../../models/feed.model';
import { getFeedByGuid } from '../../store/notizie-selectors';
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
      select(getFeedByGuid, {guid: this.guidParameter} )
    )
  }

}
