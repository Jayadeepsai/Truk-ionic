import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bid',
  templateUrl: './view-bid.page.html',
  styleUrls: ['./view-bid.page.scss'],
})
export class ViewBidPage implements OnInit {

item: any = [];
bids:any=[];
  constructor() { }

  ngOnInit() {

    this.bids = JSON.parse(localStorage.getItem("viewBid") || '{}');
    console.log(this.bids)

  }

}
