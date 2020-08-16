import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'blog', component: BlogComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
