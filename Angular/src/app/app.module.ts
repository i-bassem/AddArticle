import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibrariesComponent } from './Libraries/libraries.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LibrariesimportModule } from './Libraries/librariesimport.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Card, CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    AppComponent, LibrariesComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,AppRoutingModule,
    ReactiveFormsModule, LibrariesimportModule,
    CommonModule,CardModule
  ],
  providers: [
    ],
      
  bootstrap: [AppComponent]
})
export class AppModule {

 }
