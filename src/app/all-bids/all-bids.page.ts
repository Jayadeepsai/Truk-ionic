import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-bids',
  templateUrl: './all-bids.page.html',
  styleUrls: ['./all-bids.page.scss'],
})
export class AllBidsPage implements OnInit {
  singlearray: any;
  allbids: any;

  constructor() { }

  ngOnInit() {
    this.singlearray =JSON.parse(localStorage.getItem("viewBid") || '{}')
    console.log(this.singlearray)

    var data ={
      "_id":this.singlearray._id
    }


    fetch("http://localhost:3000/quotes/getsingleloadbids", {
      method: 'POST',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),      

    })
      .then(response => response.json())
      .then(result => {
        console.log(result.message)
 
        for(let i=0; i<result.message.length;i++){
          this.allbids =result.message[i].bids
          console.log(this.allbids)
        }
           

     
      

      }

      ).catch(err =>
        console.log(err))
  }

}
