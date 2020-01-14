import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GenealogistEffects } from './genealogist.effects';

describe('GenealogistEffects', () => {
  let actions$: Observable<any>;
  let effects: GenealogistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GenealogistEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GenealogistEffects>(GenealogistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
