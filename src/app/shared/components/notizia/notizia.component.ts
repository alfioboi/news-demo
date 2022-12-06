import { Component, Input } from '@angular/core';
import { Feed } from '../../models/feed.model';

@Component({
  selector: 'app-notizia',
  templateUrl: './notizia.component.html',
  styleUrls: ['./notizia.component.scss']
})
export class NotiziaComponent {
  @Input() notizia!: Feed;

}
