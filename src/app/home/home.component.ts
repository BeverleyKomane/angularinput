import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
name=""
surname=""
age=""
  ngOnInit() {
  }
onClick(){
  console.log(this.name);
  console.log(this.surname);
  console.log(this.age);
}
}
