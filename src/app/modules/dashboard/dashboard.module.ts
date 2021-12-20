import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsComponent } from './components/posts/posts.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    SidebarComponent,
    PostsComponent,
    ArticlesComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, MatSidenavModule],
})
export class DashboardModule {}
