import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'carte', component: CarteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
