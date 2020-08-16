import { BlogModule } from './blog/blog.module';
import { ResumeModule } from './resume/resume.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ResumeModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
