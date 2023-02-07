import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-details',
  templateUrl: './load-details.page.html',
  styleUrls: ['./load-details.page.scss'],
})
export class LoadDetailsPage implements OnInit {

  body={
    OriginLocation:'',
    DestinationLocation:'',
    date: '',
    vehicle: '',
    product: '',
    Quantity: '',
  
    expectedPrice: '',
    tonnes:'',
    Number:'',
    loadCapacity:'',
  
    typeOfPay:'',
    comments:'',
    length:'',
    breadth:'',
    height:''
  }
  objects: any;
  constructor() { }

  ngOnInit():void{
    // this.get()
 
    this.objects = JSON.parse(localStorage.getItem("loadDetails") || '{}');
    console.log(this.objects)
 
   }

}
