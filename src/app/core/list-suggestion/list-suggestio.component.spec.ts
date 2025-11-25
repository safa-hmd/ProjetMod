import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuggestioComponent } from './list-suggestio.component';

describe('ListSuggestioComponent', () => {
  let component: ListSuggestioComponent;
  let fixture: ComponentFixture<ListSuggestioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSuggestioComponent]
    });
    fixture = TestBed.createComponent(ListSuggestioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
