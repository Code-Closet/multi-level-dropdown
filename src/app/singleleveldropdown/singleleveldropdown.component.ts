import { Component, OnInit } from '@angular/core';
import { SingleLevelDropdownData } from './singleleveldropdown-mock.data';

@Component({
  selector: 'app-singleleveldropdown',
  templateUrl: './singleleveldropdown.component.html',
  styleUrls: ['./singleleveldropdown.component.css']
})
export class SingleleveldropdownComponent implements OnInit {

  public dropdown_state :Boolean = false;
  public dropdownData ;
  public clickedNode :String = "";
  public selectedObject : String = "Dropdown";

  constructor() { }

  ngOnInit() {
    this.dropdownData = SingleLevelDropdownData;
  }

  onButtonClick(event : any){
    this.dropdown_state = !this.dropdown_state;
    }

  onClickParent(event : MouseEvent, node : any){
    event.cancelBubble = true;
    if(node.values && node.values.length > 0)
      this.clickedNode = node.name;
    else{
      this.selectedObject = node.name;
      this.clickedNode = "";
      this.dropdown_state = !this.dropdown_state;
    }
  }

  onClickElement(event : MouseEvent, node : String){
    event.cancelBubble = true;
    this.selectedObject = node;
    this.clickedNode = "";
    this.dropdown_state = !this.dropdown_state;
  }
}
