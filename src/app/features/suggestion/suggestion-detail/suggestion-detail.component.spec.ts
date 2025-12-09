import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionDetailComponent } from './suggestion-detail.component';

describe('SuggestionDetailComponent', () => {
  let component: SuggestionDetailComponent;
  let fixture: ComponentFixture<SuggestionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionDetailComponent]
    });
    fixture = TestBed.createComponent(SuggestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
