import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.page.html',
  styleUrls: ['./place-bid.page.scss'],
})
export class PlaceBidPage implements OnInit {
  item: any = []; 
  bids:any=[];
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
  finalss:any;


  newMsg: any;
  created!: number;
  date: any

  currentUserType="Shipper";
  

  BidActivity= [
    {
        "price": 2000,
        "userNo": 6207196726,
        "userType": "Agent",
        "time": 1676008124890
    },
    {
        "price": 1504,
        "userNo": 123456,
        "userType": "Shipper",
        "time": 1676008165759
    },
    {
        "price": 27,
        "userNo": 6207196726,
        "userType": "Agent",
        "time": 1676008214136
    },
    {
        "price": 1507,
        "userNo": 123456,
        "userType": "Shipper",
        "time": 1676008235850
    },
    {
        "price": 200,
        "userNo": 6207196726,
        "userType": "Agent",
        "time": 1676008244533
    },
    {
        "price": 1587,
        "userNo": 123456,
        "userType": "Shipper",
        "time": 1676008250581
    
    }
]

  constructor() { }

  @ViewChild(IonContent)
  content!: IonContent;

  ngOnInit():void{

    this.date = new Date().getTime()
    
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

    "_id":"63e0c94aa00abe8498d006ee",
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


 //send mes
 sendMessage() {
  this.BidActivity.push({
    price: 12,
    userNo: 123456,
    time: this.date,
    userType:"Shipper"
  });

  this.newMsg = '';
  setTimeout(() => {
    this.content.scrollToBottom(200);
  })
}

}
