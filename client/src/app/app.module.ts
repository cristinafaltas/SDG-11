import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';
import { GraficoSlumsComponent } from './grafico-slums/grafico-slums.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponenteComponent,
    GraficoSlumsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
