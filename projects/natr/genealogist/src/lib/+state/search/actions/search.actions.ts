import { createAction, props } from '@ngrx/store';

// tslint:disable-next-line:interface-over-type-literal
export type SearchActionPropType = {search: any};

export const doSearch = createAction(
  '[Search] Do Search',
  props<SearchActionPropType>()
);




