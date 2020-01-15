/* tslint:disable:interface-over-type-literal */
import { createAction, props } from '@ngrx/store';
import {TreeModel} from '@natr/the-trees/lib/models/tree.model';

export type SearchCallbackFunctionType = (searchObject: any, treeData: TreeModel) => TreeModel;

export type SearchActionPropType = {searchObject: any};
export type CallbackSearchActionPropType = {searchObject: any, callback: SearchCallbackFunctionType};

export const doSearch = createAction(
  '[Search] Do Search',
  props<SearchActionPropType>()
);

export const doCallbackSearch = createAction(
  '[Search] Do Callback Search',
  props<CallbackSearchActionPropType>()
);




