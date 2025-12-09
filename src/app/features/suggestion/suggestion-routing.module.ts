import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
  //{path:'details/:id',component:SuggestionDetailComponent}
  {path: 'ajouter',component:SuggestionFormComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionRoutingModule { }
