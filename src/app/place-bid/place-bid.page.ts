import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.page.html',
  styleUrls: ['./place-bid.page.scss'],
})
export class PlaceBidPage implements OnInit {
  item: any = []; 
  _id: any;
id:any
  OriginLocation:any;
  DestinationLocation: any;
  data: any;
  vehicle: any;
  product: any;
  Quantity: any;
  objects: any;
  bidPrice:any;
  finalss:any
  constructor() { }

  ngOnInit():void{
    
   this.objects = JSON.parse(localStorage.getItem("loadBy") || '{}');
   console.log(this.objects)

    fetch("http://localhost:3000/quotes/quoteByid/"+ this.objects._id, {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        for(let i=0; i<result.length;i++){
      var final= result[i]
        }
          this.item = final.bids
          for(let i=0; i<this.item.length;i++){
            this.finalss= JSON.stringify(this.item[i])
              }
        console.log(this.finalss)
      }

      ).catch(err =>
        console.log(err))
  }

  
  

  placeBid(bidPrice:any){
    //This will be called only foe first time bidding

   /*  {
    
      "_id":"63e0a33c4081a10c3853b0de",
      "mobileNo":62071967001,
      "Bidprice":4000
   
   } */

console.log(bidPrice)
   var body = {

    "_id":"63e0ca2da00abe8498d006f4",
    "mobileNo":62071967001,
    "Bidprice":this.bidPrice

   }

   fetch("http://localhost:3000/quotes/placeBid", {
    method: 'post',
    headers: {
      "access-Control-Allow-Origin": "*",
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(body),

  })
    .then(response => response.json())
    .then(async result => {
      console.log(result)
      
      


    }

    ).catch(err =>
      console.log(err))



}

}
