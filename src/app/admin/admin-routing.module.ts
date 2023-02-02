import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationEditComponent } from './components/application-edit/application-edit.component';
import { ApplicationFicheComponent } from './components/application-fiche/application-fiche.component';
import { ApplicationHomeComponent } from './components/application-home/application-home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'applications', component: ApplicationHomeComponent},
      {path: 'applications/edit', component: ApplicationEditComponent},
      {path: 'applications/edit/:id', component: ApplicationEditComponent},
      {path: 'applications/fiche/:id', component: ApplicationFicheComponent},
      {path: 'users', component: UserHomeComponent},
      {path: 'users/edit', component: UserEditComponent},
      {path: 'users/edit/:id', component: UserEditComponent}
    ]
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
