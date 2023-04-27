import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-driver-more-details',
  templateUrl: './driver-more-details.page.html',
  styleUrls: ['./driver-more-details.page.scss'],
})
export class DriverMoreDetailsPage implements AfterViewInit {


  @ViewChild('map', { static: false }) mapElement: any;
  constructor(public zone: NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.loadMapWithDirection();
  }


  


  loadMapWithDirection() {

    const map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 },
      });
    
  }
}
