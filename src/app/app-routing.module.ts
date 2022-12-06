import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivioComponent } from './shared/components/archivio/archivio.component';
import { DettaglioNotiziaComponent } from './shared/components/dettaglio-notizia/dettaglio-notizia.component';
import { ElencoNotizieComponent } from './shared/components/elenco-notizie/elenco-notizie.component';

const routes: Routes = [
  {
    path: 'ultime-notizie',
    component: ElencoNotizieComponent
  },
  {
    path: 'archivio',
    component: ArchivioComponent
  },
  {
    path: 'dettaglio/:guid',
    component: DettaglioNotiziaComponent
  },
  {
    path: '',
    redirectTo: 'ultime-notizie',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
