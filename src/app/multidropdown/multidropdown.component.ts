import { Component, OnInit, Renderer} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MultidropdownData } from './multidropdown-mock.data';
import { MultidropdownModel } from './multidropdown.model';

@Component({
  selector: 'app-multidropdown',
  templateUrl: './multidropdown.component.html',
  styleUrls: ['./multidropdown.component.css']
})
export class MultidropdownComponent implements OnInit {

  public dropdown_state :Boolean = false;
  public openedNodes : String[];
  public dropdownData ;
  public selectedDropdownObject : MultidropdownModel;

  constructor(private renderer : Renderer) { }

  ngOnInit() {
    this.dropdownData = MultidropdownData;
    this.openedNodes = [];
    this.selectedDropdownObject = {name :"Dropdown", path: "", address : ""};
    this.generateAddress(this.dropdownData,"", 0);
  }

  onButtonClick(event : any){
    this.openedNodes = [];
    this.dropdown_state = !this.dropdown_state;
    }

  generateAddress(data : any ,parentAddress : String ,addressNode: number){
    if(data && data.length > 0){
      data.forEach(element => {
        if(!element.address)
            element.address = parentAddress+"~"+addressNode;
        if(element.values.length > 0)
          this.generateAddress(element.values, element.address, 0);
        addressNode++;
      });
    }
  }

  onChildClick(event : MouseEvent, address : String) {
    event.cancelBubble = true;
    let navAddress : String[] = address.split("~");
    navAddress.shift();
    let breadcrum : String ="";
    let newData = this.dropdownData;
    navAddress.forEach(address =>{
       newData = newData[+address];
       breadcrum += newData.name +"~";
       if(newData.values && newData.values.length > 0){         
          newData = newData.values;
       }else{
         this.selectedDropdownObject.name = newData.name;
         this.selectedDropdownObject.path = breadcrum;
         this.selectedDropdownObject.address = newData.address;
         newData = newData.values;
       }
    });
    if(newData && newData.length > 0){
      this.dropdownMenuControl(address);      
    }else{
      this.openedNodes = [];
      this.dropdown_state = !this.dropdown_state;
    }
  }

  dropdownMenuControl(address : String){
    let newNodes : String[] = [];
    if(this.openedNodes && this.openedNodes.length > 0){
      this.openedNodes.forEach(node =>{
        if(address.indexOf(<string>node) >= 0 && address.length > node.length){
          if(address !== <string>node){
            newNodes.push(node);
          }
        }
      });
      if(this.openedNodes.find(node =>node === address)){
        this.openedNodes = newNodes;
      }else{
        this.openedNodes = newNodes;
        this.openedNodes.push(address);
      }
    }else{
      this.openedNodes.push(address);
    }    
  }
}
