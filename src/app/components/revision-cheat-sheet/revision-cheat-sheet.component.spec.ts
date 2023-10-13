import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionCheatSheetComponent } from './revision-cheat-sheet.component';

describe('RevisionCheatSheetComponent', () => {
  let component: RevisionCheatSheetComponent;
  let fixture: ComponentFixture<RevisionCheatSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisionCheatSheetComponent]
    });
    fixture = TestBed.createComponent(RevisionCheatSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
