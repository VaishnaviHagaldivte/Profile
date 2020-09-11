import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouteRoutingModule } from './app-route/app-route-routing.module'
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
