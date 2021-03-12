import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House 1",
      "Type":"flat",
      "Price": 12000
    },
    {
      "Id":2,
      "Name":"Birla House 2",
      "Type":"cottage",
      "Price": 22000
    },
    {
      "Id":3,
      "Name":"Birla House 3",
      "Type":"bunglow",
      "Price": 32000
    },
    {
      "Id":4,
      "Name":"Birla House 4",
      "Type":"darbar",
      "Price": 42000
    },
    {
      "Id":5,
      "Name":"Birla House 5",
      "Type":"cottage",
      "Price": 52000
    },
    {
      "Id":6,
      "Name":"Birla House 6",
      "Type":"bunglow",
      "Price": 62000
    },
    {
      "Id":7,
      "Name":"Birla House 7",
      "Type":"apartment",
      "Price": 72000
    },
    {
      "Id":8,
      "Name":"Birla House 8",
      "Type":"House",
      "Price": 82000
    },
    {
      "Id":9,
      "Name":"Birla House 9",
      "Type":"apartment",
      "Price": 9000
    },
    {
      "Id":10,
      "Name":"Birla House 10",
      "Type":"flat",
      "Price": 10000
    },
    {
      "Id":11,
      "Name":"Birla House 11",
      "Type":"House",
      "Price": 11000
    },
    {
      "Id":12,
      "Name":"Birla House 12",
      "Type":"villa",
      "Price": 192000
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
