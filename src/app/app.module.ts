import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import {RouterModule, Routes} from '@angular/router';
import { BtnComponent } from './btn/btn.component';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';





const appRoutes: Routes = [
  { path: 'carte', component: CarteComponent},
  { path: '', component: BtnComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    BtnComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
