import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {searchFeatureKey, searchReducer, SearchState} from './search/reducers/search.reducer';


export const genealogistStateFeatureKey = 'genealogistState';

export interface GenealogistState {
  [searchFeatureKey]: SearchState;
}

export const reducers: ActionReducerMap<GenealogistState> = {
  [searchFeatureKey]: searchReducer
};


export const metaReducers: MetaReducer<GenealogistState>[] = [];
