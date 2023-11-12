import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './lesson5/components/home/home.component';
import { WorksComponent } from './lesson5/components/works/works.component';
import { CenzorComponent } from './lesson5/components/works/cenzor/cenzor.component';
import { UserlistComponent } from './lesson5/components/works/userlist/userlist.component';
import { TasklistComponent } from './lesson5/components/works/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'userlist', component: UserlistComponent },
    { path: 'tasklist', component: TasklistComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
