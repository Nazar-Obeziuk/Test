import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskChildComponent } from './lesson3/task-child/task-child.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { HomeComponent } from './lesson5/components/home/home.component';
import { CenzorComponent } from './lesson5/components/works/cenzor/cenzor.component';
import { UserlistComponent } from './lesson5/components/works/userlist/userlist.component';
import { TasklistComponent } from './lesson5/components/works/tasklist/tasklist.component';
import { WorksComponent } from './lesson5/components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskChildComponent,
    Lesson5Component,
    HomeComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
