import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { SuggestionComponent } from './suggestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';


@NgModule({
  declarations: [
    SuggestionComponent,
    ListSuggestionComponent,
    SuggestionDetailComponent,
    SuggestionFormComponent
   
  ],
  imports: [
    CommonModule,
    SuggestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class SuggestionModule { }
