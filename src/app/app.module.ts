import { NewsChildComponent } from './news-child/news-child.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      NewsComponent,
      ContactComponent,
      AboutComponent,
      NewsChildComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
          path: 'news',
          component: NewsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
    },
    {
      path: 'about',
      component: AboutComponent
  },
    ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
