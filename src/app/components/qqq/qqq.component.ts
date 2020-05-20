import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qqq',
  templateUrl: './qqq.component.html',
  styleUrls: ['./qqq.component.scss']
})
export class QqqComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;
 
  constructor() { }

  ngOnInit(): void {
    this.name = 'audi';
    this.speed = 235;
    this.model = 'rs8';
    this.colors = {
      car: 'White',
      salon:'black',
      wheels: 'Silver'
    };
    this.options = ["ABS", "Autopilot", "bebebe"];
  }
showEdit(){
  this.isEdit = !this.isEdit;
}

  addOpt(option){
 this.options.unshift(option);
 return false;
  }
deleteOpt(option){
  for(let i = 0; i <this.options.length; i++){
  if(this.options[i] == option){
    this.options.splice(i, 1);
    break;
  }
  }
}

  carSelect(carName) {
    if(carName == 'bmw'){
    this.name = 'BMW';
    this.speed = 280;
    this.model = 'M5';
    this.colors = {
      car: 'bloo',
      salon:'white',
      wheels: 'Silver'
  };
  this.options = ["ABS", "Autopilot", "bebebe"];
} else if(carName == 'audi') {
  this.name = 'audi';
  this.speed = 235;
  this.model = 'rs8';
  this.colors = {
    car: 'White',
    salon:'black',
    wheels: 'Silver'
  };
  this.options = ["ABS", "Autopilot", "bebebe"];
} else {
  this.name = 'Mercedes';
  this.speed = 180;
  this.model = 'c180';
  this.colors = {
    car: 'White',
    salon:'black',
    wheels: 'Silver'
  };
  this.options = ["ABS", "Autopilot", "bebebe"];
}
}
}




interface Colors {
  car:string,
  salon:string,
  wheels:string;
}
