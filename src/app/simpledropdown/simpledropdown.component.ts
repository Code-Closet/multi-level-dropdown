import { Component, OnInit } from '@angular/core';
import { SimpleDropdownData } from './simpledropdown-mock.data';
@Component({
  selector: 'app-simpledropdown',
  templateUrl: './simpledropdown.component.html',
  styleUrls: ['./simpledropdown.component.css']
})
export class SimpledropdownComponent implements OnInit {

  public dropdown_state :Boolean = false;
  public dropdownData ;
  public selectedObject : String = "Dropdown";
  constructor() { }

  ngOnInit() {
    this.dropdownData = SimpleDropdownData;
  }

  onButtonClick(event : any){
  this.dropdown_state = !this.dropdown_state;
  }

  onClickElement(event : MouseEvent , element : String){
    event.cancelBubble = true;
    this.selectedObject = element;
    this.dropdown_state = !this.dropdown_state;
  }
}
