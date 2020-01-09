import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TreeSearchComponent} from './components/tree-search/tree-search.component';
import {TheTreesModule} from '@natr/the-trees';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    TreeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TheTreesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
