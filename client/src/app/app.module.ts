import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule } from '@nebular/theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QueryBoxComponent } from './query-box/query-box.component';
import { ResultsBoxComponent } from './results-box/results-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QueryBoxComponent,
    ResultsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    FlexLayoutModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
