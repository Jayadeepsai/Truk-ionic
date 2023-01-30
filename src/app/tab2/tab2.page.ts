import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  item: any = [];    //Storing the items data in the array


  OriginLocation:any;
  DestinationLocation: any;
  date: any;
  vehicle: any;
  product: any;
  Quantity: any;
  expectedPrice: any;
  searchtext:any;
  AttendenceArray: any;
  tabkey: any;
  tabValue: any;

  getData(){
    this.AttendenceArray.forEach((element:any)=>{
      this.tabkey=Object.keys(element);
      this.tabValue?.push(Object.values(element));
    });
    console.log(this.getData)
    }

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
