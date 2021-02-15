import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'contact', component: ContactComponent
},
{
  path: 'blog', component: BlogComponent
},
{
  path: 'resume', component: ResumeComponent
},
{
  path: 'portfolio', component: PortfolioComponent
}, {
  path: '**', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
