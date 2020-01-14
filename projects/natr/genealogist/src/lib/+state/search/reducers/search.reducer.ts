import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

// tslint:disable-next-line:no-empty-interface
export interface SearchState {

}

export const initialState: SearchState = {

};

const doSearchFunction = (state: SearchState, action): SearchState => {
  console.log(`${doSearchFunction.name} state is`, state);
  console.log(`${doSearchFunction.name} action is`, action);
  return state;
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.doSearch, doSearchFunction),
);

