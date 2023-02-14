import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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


  

  currentuser = 'Narayana';

  @ViewChild(IonContent)
  content!: IonContent;
//map your bidactivity array with bids.bidactivity array
//integrate api 
  constructor() {

   }

  ngOnInit() {

    this.date = new Date().getTime()
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
