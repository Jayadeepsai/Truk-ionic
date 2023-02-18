import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bid',
  templateUrl: './view-bid.page.html',
  styleUrls: ['./view-bid.page.scss'],
})
export class ViewBidPage implements OnInit {

item: any = [];
bids:any=[];
NegoPrice:any;
currentUserType="Shipper";
  bidActivity: any;
  Number: any;
  bidActivityprice: any;
  bidact: any;
  bidnumber: any;
  initialaccepted: any;
  finalAcceptforBid: any;
  goinsidebids: any;
  goinsidetenprice: any;
  finalAgentAccept: any;
  constructor() { }

  ngOnInit() {

    this.bids = JSON.parse(localStorage.getItem("viewBid") || '{}');

    for(let i=0;i<this.bids.bids.length;i++){
         this.bidact=this.bids.bids[i]
    }
    
/* for(let i=0;i<this.bids.bids.length;i++){
   this.bidActivity= this.bids.bids[i].BidActivity
  console.log(this.bidActivity)
} */

fetch("http://localhost:3000/quotes/quoteByid/"+ this.bids._id, {
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
      console.log(this.item)
      for(let i=0; i<this.item.length;i++){
        this.goinsidebids =this.item[i].isShipperAccepted
        this.finalAgentAccept =this.item[i].isAgentAccepted
        this.goinsidetenprice =this.item[i].tentativefinalPrice
        console.log(this.goinsidebids)
        this.bidActivity= this.item[i].BidActivity
        console.log(this.bidActivity)
        this.bidnumber =this.item[i].mobileNo
          }
    console.log(this.bidnumber)

    for(let i=0; i<this.bidActivity.length;i++){
      this.initialaccepted =this.bidActivity[i]
      console.log(this.initialaccepted.initialAccept)
      this.bidActivityprice= this.bidActivity[i].userNo
      
        }
        console.log(this.bidActivityprice)
   
  }

  ).catch(err =>
    console.log(err))

    
}

  

  negotiate(){
    console.log('gkjf')
    var body = {
  
    
      "_id":this.bids._id,
      "mobileNo":this.bidnumber,
      "userNo":this.bidActivityprice,
      "userType":"Shipper",
      "price":this.NegoPrice
    
     }
     console.log(this.bids._id)
console.log(this.bidnumber)
  
    fetch("http://localhost:3000/quotes/updateBids", {
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

  acceptBid(){

    var body = {
  
    
      "_id":this.bids._id,
      "mobileNo":this.bidnumber,
"isShipperAccepted":true
  
    
     }
     console.log(this.bids._id)
console.log(this.bidnumber)
  
    fetch("http://localhost:3000/quotes/initialacceptbyshipper", {
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
