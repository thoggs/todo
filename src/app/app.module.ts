import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CircleComponent } from './svg/circle/circle.component';
import { MinusComponent } from './svg/minus/minus.component';
import { DoneComponent } from './svg/done/done.component';
import { RemakeComponent } from './svg/remake/remake.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    MinusComponent,
    DoneComponent,
    RemakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
