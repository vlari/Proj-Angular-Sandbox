import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component';


const routes: Routes = [
  {
    path: 'forms', component: FormsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'path' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
