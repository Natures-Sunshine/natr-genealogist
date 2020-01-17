import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TreeSearchComponent} from './components/tree-search/tree-search.component';
import {TheTreesModule} from '@natr/the-trees';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {GenealogistModule} from '../../../natr/genealogist/src/lib/genealogist.module';
import {FormsModule} from '@angular/forms';
import {UsrInfoDialogComponent} from './components/usr-info-dialog/usr-info-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  entryComponents: [UsrInfoDialogComponent],
  declarations: [
    AppComponent,
    TreeSearchComponent,
    UsrInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TheTreesModule,
    GenealogistModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
