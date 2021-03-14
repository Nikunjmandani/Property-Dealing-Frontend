import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.registrationForm=new FormGroup({
       userName:new FormControl()
    });
  }

}
