import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule } from '@nebular/theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QueryBoxComponent } from './query-box/query-box.component';
import { ResultsBoxComponent } from './results-box/results-box.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimComponent } from './anim/anim.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImgSliderComponent } from './img-slider/img-slider.component';
// import { FlareComponent } from './flare/flare.component';
@NgModule({
  declarations: [
    AppComponent,
    QueryBoxComponent,
    ResultsBoxComponent,
    HeaderComponent,
    FooterComponent,
    AnimComponent,
    ImgSliderComponent,
    // FlareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    FlexLayoutModule,
    NbInputModule,
    NbButtonModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
