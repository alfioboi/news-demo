import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoNotizieComponent } from './shared/components/elenco-notizie/elenco-notizie.component';

const routes: Routes = [
  {
    path: '',
    component: ElencoNotizieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
