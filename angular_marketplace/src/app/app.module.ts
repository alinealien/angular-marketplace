import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './component/tamplate/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
//import { CheckoutComponent } from './viewes/checkout/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFilmComponent } from './components/template/card-film/card-film.component';
import { ListFilmsComponent } from './views/list-films/list-films.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardFilmComponent,
    ListFilmsComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
