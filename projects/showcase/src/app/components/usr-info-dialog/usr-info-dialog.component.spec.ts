import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrInfoDialogComponent } from './usr-info-dialog.component';

describe('UsrInfoDialogComponent', () => {
  let component: UsrInfoDialogComponent;
  let fixture: ComponentFixture<UsrInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
