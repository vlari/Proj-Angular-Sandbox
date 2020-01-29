import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { NotfoundComponent } from "../shared/notfound/notfound.component";
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  {
    path: 'forms', 
    component: FormsComponent,
    children: [
      { path: 'template', component: TemplateformComponent },
      { path: 'reactive', component: ReactiveformComponent },
      { path: '', pathMatch: 'full', redirectTo: 'forms' },
      { path: '**', component: NotfoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
