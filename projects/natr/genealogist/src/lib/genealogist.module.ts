import {NgModule} from '@angular/core';
import {GenealogistComponent} from './genealogist.component';
import {EffectsModule} from '@ngrx/effects';
import {GenealogistEffects} from './effects/genealogist.effects';
import {StoreModule} from '@ngrx/store';
import * as fromGenealogistState from './+state/index';


@NgModule({
  declarations: [GenealogistComponent],
  imports: [
    EffectsModule.forFeature([GenealogistEffects]),
    StoreModule.forFeature(
      fromGenealogistState.genealogistStateFeatureKey,
      fromGenealogistState.reducers,
      {metaReducers: fromGenealogistState.metaReducers}
    ),
  ],
  exports: [GenealogistComponent]
})
export class GenealogistModule {
}
