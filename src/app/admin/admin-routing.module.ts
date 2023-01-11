import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationEditComponent } from './components/application-edit/application-edit.component';
import { ApplicationFicheComponent } from './components/application-fiche/application-fiche.component';
import { ApplicationHomeComponent } from './components/application-home/application-home.component';

const routes: Routes = [
  {path: 'applications', component: ApplicationHomeComponent},
  {path: 'applications/edit', component: ApplicationEditComponent},
  {path: 'applications/fiche/:id', component: ApplicationFicheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
