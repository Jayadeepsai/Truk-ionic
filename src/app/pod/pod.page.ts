import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pod',
  templateUrl: './pod.page.html',
  styleUrls: ['./pod.page.scss'],
})
export class PodPage implements OnInit {


  waybill:any;
  orderId:any;
  ConsigneeName:any;
  Address:any;
  Finalstatus:any;
  DeliveredOn:any;

  constructor() { }

  ngOnInit() {
  }
  sumbit(){
    var body ={
      waybill:this.waybill,
      orderId:this.orderId,
      ConsigneeName:this.ConsigneeName,
      Address:this.Address,
      Finalstatus:this.Finalstatus,
      DeliveredOn:this.DeliveredOn
    }
    console.log(body)
  }
  

}
