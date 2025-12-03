import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { SuggestionComponent } from './suggestion.component';
import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component';


@NgModule({
  declarations: [
    SuggestionComponent,
    ListSuggestionComponent,
    SuggestionDetailComponent
   
  ],
  imports: [
    CommonModule,
    SuggestionRoutingModule,
    FormsModule
    
  ]
})
export class SuggestionModule { }
