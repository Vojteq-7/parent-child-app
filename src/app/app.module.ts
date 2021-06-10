import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostsComponent} from "./component/posts/posts.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {HomeComponent} from "./component/home/home.component";
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostItemComponent } from './component/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    PostsComponent,
    PostsListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
