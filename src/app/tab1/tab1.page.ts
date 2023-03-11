import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  segmentValue='1';
  item: any = [];    //Storing the items data in the array
  isactive:any;
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
  real: any;
  products: any;
  _id: any;
  load:any
  isActive:any;
  Id:any

  constructor(private router:Router) {}

  

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }


  ngOnInit():void{
    
   this.toggle(this.isActive="Active")
  }
  get() {
    fetch("http://localhost:3000/quotes/allQuotes", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.Loads
         console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }


  sendData(data:any){
     console.log(data._id)
     localStorage.setItem("currentSelectedLoad",JSON.stringify(data));
  }



// Isactive Functionality
  Isactive(docData:any){
    var data={
      isActive:"Deactive"
    }
   // console.log(data)

    console.log(docData)
    fetch("http://localhost:3000/quotes/loadDeactivate/" + docData._id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),

          this.products = result //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions

     
        window.location.reload()  // reloading window

      }

      ).catch(err =>
        console.log(err))
  }

  loadDetails(load: any) {
    //   console.log(load)
      localStorage.setItem("loadDetails", JSON.stringify(load));
      this.router.navigate(["load-details"])
     }

     bidById(bid: any) {
      //   console.log(load)
        localStorage.setItem("viewBid", JSON.stringify(bid));
        this.router.navigate(["all-bids"])
       }

 
       toggle(isActive:any){
        this.isactive=isActive
        this.activeGet()
        console.log(isActive)
       }
       toggles(isActive:any){
        this.isactive=isActive
        this.deActiveGet()
        console.log(isActive)
       }
       toggless(isActive:any){
        this.isactive=isActive
        this.completedGet()
        console.log(isActive)
       }
       /* togglesss(isActive:any){
        this.isactive=isActive
        this.inTransitGet()
        console.log(isActive)
       } */

       activeGet(){
        console.log(this.isactive)
        var body={
          Number: "12345678", isActive:"Active" 
        }
    fetch("http://localhost:3000/quotes/loadsByStatusAndNumber" , {
      method: 'POST',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.load
         console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }



  
  deActiveGet(){
    console.log(this.isactive)
    var body={
      Number: "12345678", isActive:"Deactive" 
    }
fetch("http://localhost:3000/quotes/loadsByStatusAndNumber" , {
  method: 'POST',
  headers: {
    "access-Control-Allow-Origin": "*",
    "Content-Type": 'application/json'
  },
  body: JSON.stringify(body),
})
  .then(response => response.json())
  .then(result => {
    console.log(result),
      this.item = result.load
     console.log(this.item)
  }

  ).catch(err =>
    console.log(err))
}



completedGet(){
  console.log(this.isactive)
  var body={
    Number: "12345678", isActive:"Completed" 
  }
fetch("http://localhost:3000/quotes/loadsByStatusAndNumber" , {
method: 'POST',
headers: {
  "access-Control-Allow-Origin": "*",
  "Content-Type": 'application/json'
},
body: JSON.stringify(body),
})
.then(response => response.json())
.then(result => {
  console.log(result),
    this.item = result.load
   console.log(this.item)
}

).catch(err =>
  console.log(err))
}



/* inTransitGet(){
  console.log(this.isactive)
  var body={
    Number: "12345678", isActive:"In-Progress" 
  }
fetch("http://localhost:3000/quotes/loadsByStatusAndNumber" , {
method: 'POST',
headers: {
  "access-Control-Allow-Origin": "*",
  "Content-Type": 'application/json'
},
body: JSON.stringify(body),
})
.then(response => response.json())
.then(result => {
  console.log(result),
    this.item = result.load
   console.log(this.item)
}

).catch(err =>
  console.log(err))
} */




       }


