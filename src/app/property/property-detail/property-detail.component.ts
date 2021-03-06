import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
public propertyId:number;
property=new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private route:ActivatedRoute,
              private router :Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];// returns always a string so use number
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property= data;
    //       },error =>this.router.navigate(['/'])
    //     );
      }
     );

     this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:true
      }

    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.png',
        medium: 'assets/images/internal-1.png',
        big: 'assets/images/internal-1.png'
      },
      {
        small: 'assets/images/internal-2.png',
        medium: 'assets/images/internal-2.png',
        big: 'assets/images/internal-2.png'
      },
      {
        small: 'assets/images/internal-3.png',
        medium: 'assets/images/internal-3.png',
        big: 'assets/images/internal-3.png'
      },{
        small: 'assets/images/internal-4.png',
        medium: 'assets/images/internal-4.png',
        big: 'assets/images/internal-4.png'
      },
      {
        small: 'assets/images/internal-5.png',
        medium: 'assets/images/internal-5.png',
        big: 'assets/images/internal-5.png'
      }
    ];
  }


}
