import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstname: string = ""
  lastname: string = ""
  names : string[] = []

  constructor() { }

  ngOnInit(): void {
  }
  
  handleSave(){
    if(this.firstname){
      this.names.push(this.firstname)
      this.firstname = ""
      
    }
  }
  handleDelete(){
    if(this.firstname){
      this.names.push(this.firstname)
      this.firstname = ""
    }
  }

}
