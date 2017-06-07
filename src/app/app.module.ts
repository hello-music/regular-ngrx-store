import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {reducer} from './store/counter';
import {StoreModule} from '@ngrx/store';
import {UserActions} from './store/user.actions';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {UserService} from './apis/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({counter: reducer}),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
    UserActions,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
