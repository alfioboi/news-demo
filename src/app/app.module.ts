import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { interval, of, tap } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import NotizieActionTypes from './shared/store/notizie-action-types';
import { notizieReducer, notizieState } from './shared/store/notizie.reducer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<notizieState>) => {
        return () => {
          interval(10000).pipe(
            tap(() => {
              store.dispatch(NotizieActionTypes.leggiUltimeNotizie());
            })
          ).subscribe();
          return of(true)
        };
      },
      multi: true,
      deps: [Store, HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
