import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitsService } from './fruits.service';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitComponent } from './fruit/fruit.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';





@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
