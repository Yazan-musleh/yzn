import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home.component';


const routes: Routes = [
  {path: "blogs", component: BlogListComponent},
  {path: "blogDetail", component: BlogListComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [BlogListComponent, BlogListComponent]