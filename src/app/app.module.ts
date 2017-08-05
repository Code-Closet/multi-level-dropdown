import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultidropdownComponent } from './multidropdown/multidropdown.component';
import { SingleleveldropdownComponent } from './singleleveldropdown/singleleveldropdown.component';
import { SimpledropdownComponent } from './simpledropdown/simpledropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MultidropdownComponent,
    SingleleveldropdownComponent,
    SimpledropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
