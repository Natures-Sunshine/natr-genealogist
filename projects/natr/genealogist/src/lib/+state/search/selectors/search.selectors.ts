import {createFeatureSelector} from '@ngrx/store';
import * as fromSearch from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<fromSearch.SearchState>(
  fromSearch.searchFeatureKey
);
