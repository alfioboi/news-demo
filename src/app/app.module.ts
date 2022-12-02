import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { notizieReducer } from './shared/store/notizie.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { NotizieEffects } from './shared/store/notizie.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot([notizieReducer]),
    StoreDevtoolsModule.instrument({maxAge: 25, name: 'Notizie Store'}),
    HttpClientModule,
    EffectsModule.forRoot([NotizieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
