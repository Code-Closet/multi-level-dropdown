import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultidropdownModel } from './multidropdown/multidropdown.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    public dropdownObject : MultidropdownModel = {name :"", path: "", address : ""};

 }
