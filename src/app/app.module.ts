import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { FeaturedWorksComponent } from './featured-works/featured-works.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecentPostsComponent,
    FeaturedWorksComponent,
    CopyrightComponent,
    BlogsComponent,
    BlogComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    

    RouterModule.forRoot([
      {
        path:'blogs',
        component:BlogsComponent
      },

      {
        path:'works',
        component:FeaturedWorksComponent
      },
      {
        path:'',
        component:HomeComponent
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
