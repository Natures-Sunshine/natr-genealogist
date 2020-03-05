import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GenealogistEffects } from './genealogist.effects';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';
import {initialState, TreeDataFacadeService} from '@natr/the-trees';
import {GenealogistService} from '../genealogist.service';

describe('GenealogistEffects', () => {
  let actions$: Observable<any>;
  let effects: GenealogistEffects;
  let store: MockStore<any>;
  let genealogistService: GenealogistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GenealogistEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        GenealogistService,
        TreeDataFacadeService
      ]
    });

    genealogistService = TestBed.get(GenealogistService);
    store = TestBed.get(Store);
    effects = TestBed.get<GenealogistEffects>(GenealogistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
