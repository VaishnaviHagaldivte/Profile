import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouteRoutingModule } from './app-route/app-route-routing.module'
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardsComponent,
    NavbarComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
