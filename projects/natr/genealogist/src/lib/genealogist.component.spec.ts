import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogistComponent } from './genealogist.component';

describe('GenealogistComponent', () => {
  let component: GenealogistComponent;
  let fixture: ComponentFixture<GenealogistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
