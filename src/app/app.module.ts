import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { HeaderComponent } from './header/header.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { FooterComponent } from './footer/footer.component';
import { OtherComponent } from './other/other.component';
import { SimpleInterestCalcComponent } from './simple-interest-calc/simple-interest-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    SimpleCalculatorComponent,
    HeaderComponent,
    CityInfoComponent,
    FooterComponent,
    OtherComponent,
    SimpleInterestCalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
