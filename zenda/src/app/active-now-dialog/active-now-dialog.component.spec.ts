import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNowDialogComponent } from './active-now-dialog.component';

describe('ActiveNowDialogComponent', () => {
  let component: ActiveNowDialogComponent;
  let fixture: ComponentFixture<ActiveNowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveNowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveNowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
