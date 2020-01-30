import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module')
      .then(m => m.NavigationModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/navigation' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
