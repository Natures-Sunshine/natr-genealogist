import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap, tap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {loadTreesSuccess, selectTreeData, TreeDataFacadeService} from '@natr/the-trees';
import {Action, Store} from '@ngrx/store';
import {doSearch, SearchActionPropType} from '../+state/search/actions/search.actions';
import {TreeModel} from '@natr/the-trees/lib/models/tree.model';
import {GenealogistService} from '../genealogist.service';


@Injectable()
export class GenealogistEffects {


  loadGenealogists$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(doSearch),
        concatMap(
          (action: Action) => of(action)
            .pipe(
              withLatestFrom(this.store.select(selectTreeData))
            )
        ),
        tap(
          ([action, treeData]: [SearchActionPropType & Action, TreeModel]) => {
            console.log(`${GenealogistEffects.name} action`, action);
            console.log(`${GenealogistEffects.name} treeData`, treeData);
            const filteredData = this.genealogistService.search(action.search, treeData);
            this.treeDataFacade.dispatchLocalLoadTree(filteredData);
          }
        )
      );
    },
    {dispatch: false}
  );


  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private genealogistService: GenealogistService,
    private treeDataFacade: TreeDataFacadeService
  ) {
  }

}
