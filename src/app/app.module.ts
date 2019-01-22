import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MouseAnnimationComponent } from './mouse-annimation/mouse-annimation.component';
import { SliderComponent } from './slider/slider.component';
import { TextSliderComponent } from './text-slider/text-slider.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { MobileSectionComponent } from './mobile-section/mobile-section.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MouseAnnimationComponent,
    SliderComponent,
    TextSliderComponent,
    HowItWorksComponent,
    MobileSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
