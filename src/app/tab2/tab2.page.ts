import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  item: any = [];    //Storing the items data in the array


  OriginLocation: any;
  DestinationLocation: any;
  date: any;
  vehicle: any;
  product: any;
  Quantity: any;
  expectedPrice: any;
  searchtext: any;
  AttendenceArray: any;
  tabkey: any;
  tabValue: any;
  isactive:any;
  


  getData() {
    this.AttendenceArray.forEach((element: any) => {
      this.tabkey = Object.keys(element);
      this.tabValue?.push(Object.values(element));
    });
    console.log(this.getData)
  }

  constructor(private router:Router) { }
  ngOnInit(): void {
    this.post()
  }
  toggle(isActive:any){
    this.isactive=isActive
    this.post()
    console.log(isActive)
   }
   
   toggless(isActive:any){
    this.isactive=isActive
    this.completedGet()
    console.log(isActive)
   }

  post() {
    var body={
      mobileNo:987654323,
      isActive:"Active"
    }
    fetch("http://localhost:3000/quotes/LoadMarket", {
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
          this.item = result.item
        console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }


   completedGet(){
    var body={
      mobileNo:987654323,
      isActive:"Completed"
    }
    fetch("http://localhost:3000/quotes/LoadMarket", {
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
          this.item = result.item
        console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }
  
  
  
  loadById(load: any) {
    //   console.log(load)
      localStorage.setItem("loadBy", JSON.stringify(load));
      this.router.navigate(['place-bid'], 
          { state: { profile: load._id }});
      //this.router.navigate(["place-bid"])
     }

}
