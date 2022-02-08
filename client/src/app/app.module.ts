
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { GraficoSlumsComponent } from './grafico-slums/grafico-slums.component';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    GraficoSlumsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraficoSlumsComponent,
    GoogleChartsModule,
    NgModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}











