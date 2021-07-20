import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './UI/shared/navbar/navbar.component';
import { HomeComponent } from './UI/pages/home/home.component';
import { AboutComponent } from './UI/pages/about/about.component';
import { ServicesComponent } from './UI/pages/services/services.component';
import { ExperienceComponent } from './UI/pages/experience/experience.component';
import { PortfolioComponent } from './UI/pages/portfolio/portfolio.component';
import { ContactComponent } from './UI/pages/contact/contact.component';
import { FooterComponent } from './UI/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
