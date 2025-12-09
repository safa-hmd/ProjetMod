import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'reactive',component:ReactiveComponent},
  // Provide a direct alias to the suggestion form for /ajouterSugg
  {path:'ajouterSugg', redirectTo:'suggestion/ajouter', pathMatch:'full'},
  { path: 'suggestion', loadChildren: () => import('./features/suggestion/suggestion.module').then(m => m.SuggestionModule) },
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
