import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from '../../models/feed.model';

@Component({
  selector: 'app-notizia',
  templateUrl: './notizia.component.html',
  styleUrls: ['./notizia.component.scss'],
})
export class NotiziaComponent {
  constructor(
    private router: Router
  ) {}
  vaiADettaglio(arg0: string) {
    this.router.navigate(['dettaglio', arg0]);
  }
  @Input() notizia!: Feed;
}
