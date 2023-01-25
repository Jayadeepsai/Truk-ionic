import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  segmentValue='1';

  constructor() {}

  ngOnInit(){

  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
