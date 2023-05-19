import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //cambios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandaModule } from './banda/banda.module'; //cambios

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BandaModule, //cambios
    HttpClientModule //cambios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
