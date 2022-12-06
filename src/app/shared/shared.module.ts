import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElencoNotizieComponent } from './components/elenco-notizie/elenco-notizie.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotiziaComponent } from './components/notizia/notizia.component';


@NgModule({
  declarations: [
    ElencoNotizieComponent,
    NotiziaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
