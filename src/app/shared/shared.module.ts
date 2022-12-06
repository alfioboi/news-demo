import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElencoNotizieComponent } from './components/elenco-notizie/elenco-notizie.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotiziaComponent } from './components/notizia/notizia.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ArchivioComponent } from './components/archivio/archivio.component';
import { RouterModule } from '@angular/router';
import { DettaglioNotiziaComponent } from './components/dettaglio-notizia/dettaglio-notizia.component';

const components = [
  ElencoNotizieComponent,
  NotiziaComponent,
  MenuBarComponent,
  ArchivioComponent,
  DettaglioNotiziaComponent
];
@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule
  ],
})
export class SharedModule {}
