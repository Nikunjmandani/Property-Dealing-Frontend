import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IProperty } from '../IProperty.interface'
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

@ViewChild('Form') addpropertyForm: NgForm;
@ViewChild('formTabs') formTabs : TabsetComponent;
SellRent = '1';
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/'])
  }

  onSubmit(Form: NgForm){
    console.log(this.addpropertyForm)
  }

  selectTab(tabId : number){
    this.formTabs.tabs[tabId].active =true;
  }
}
