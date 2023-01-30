import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadlisting',
  templateUrl: './loadlisting.component.html',
  styleUrls: ['./loadlisting.component.scss'],
})
export class LoadlistingComponent implements OnInit {

  item: any = [];    //Storing the items data in the array


  OriginLocation:any;
  DestinationLocation: any;
  date: any;
  vehicle: any;
  product: any;
  Quantity: any;
  expectedPrice: any;
  tonnes:any;
  Number:any;
  loadCapacity:any;
  typeOfPay:any;
  comments:any;
  length:any;
  breadth:any;
  height:any;

  constructor() {}
  ngOnInit():void{
    this.get()
  }
  get() {
    fetch("http://localhost:3000/postLoad/allLoads", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.Load
         console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }

}
