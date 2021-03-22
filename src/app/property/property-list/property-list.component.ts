import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  Properties: IPropertyBase[];

  constructor( private route: ActivatedRoute, private housingService:HousingService) { }

  ngOnInit() :void{
    if(this.route.snapshot.url.toString()){
      this.SellRent=2; //check status for on which property we are sellr | rent =1 buy =2
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.Properties=data;
        console.log(data);

      },error=>{
        console.log('httperror:');
        console.log(error);
      }
    );
  }

}
