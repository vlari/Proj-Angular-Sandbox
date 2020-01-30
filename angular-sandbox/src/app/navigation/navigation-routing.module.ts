import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component';
import { NavigationComponent } from './navigation.component';


const routes: Routes = [
  {
    path: '', 
    component: NavigationComponent,
    children: [
      {
        path: 'forms',
        loadChildren: () => import('../forms/forms.module')
          .then(m => m.FormsModule),
      },
      { path: '', pathMatch: 'full', redirectTo: 'forms' },
      { path: '**', component: NotfoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
