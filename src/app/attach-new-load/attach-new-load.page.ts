import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-attach-new-load',
  templateUrl: './attach-new-load.page.html',
  styleUrls: ['./attach-new-load.page.scss'],
})
export class AttachNewLoadPage implements AfterViewInit {

  @ViewChild('map', { static: false }) mapElement: any;
  tonnes: any;
  product: any;
  date: any;
  Quantity: any;
  Number: any;
  vehicle: any;
  loadCapacity: any;
  expectedPrice: any;
  typeOfPay: any;
  comments: any;
  length: any;
  breadth: any;
  height: any;
  pickupState:any;
  dropupState:any;
  pincode: any;
  city: any;
  state: any;


  map: any;
  address: any;
  lat: any;
  long: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;



  OriginLocation: any;
  DestinationLocation: any;
  IsOrigin = false;
  IsDestination = false;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();



  Items: any;
  data: any;
  slideOpts = {
    
  };
  item: any;
 
  
  pickupPincode: any;
  dropupPincode: any;
  pickup: any;
  dropup: any;

  constructor(
    public zone: NgZone, private alertController: AlertController
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
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
    this.directionsRenderer.setMap(map);
  }


  //Get origin and destination location 

  GetOriginLocation(data: any) {
    this.IsOrigin = true;
    this.IsDestination = false;
    console.log(data)
    this.UpdateSearchResults(data);

    // console.log(this.DestinationLocation)

  }

  out(data: any) {
    console.log(data)
    this.data = data
  }

  GetDestinationLocation(data: any) {
    this.IsDestination = true;
    this.IsOrigin = false;
    console.log(data)
    this.UpdateSearchResults(data);

  }


  UpdateSearchResults(data: any) {
    console.log(data)
    this.autocomplete.input = data;
    console.log("UpdateSearchResults")
    if (this.autocomplete.input == '') {

      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions: any[], status: any) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            console.log('places' + prediction)
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }

  //this is a main function
  calculateAndDisplayRoute() {
    this.directionsService.route(
      {
        origin: {
          //this.Originlocation
          query: this.OriginLocation,
        },
        destination: {
          //this.destination location
          query: this.DestinationLocation,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response: any, status: string) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
        }
        else {
          window.alert('Directions request failed dut to ' + status);
        }
      }
    );
  }
  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item: { place_id: any; description: any }) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    //alert(JSON.stringify(item))   
    console.log(item.description)
    this.placeid = item.description;


    if (this.IsOrigin) {
      this.OriginLocation = item.description;
      this.autocompleteItems = [];
    }
    else if (this.IsDestination) {
      this.DestinationLocation = item.description;
      this.autocompleteItems = [];
    }
  }

  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete() {
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }

  async getPickupState() {
    const url = `https://api.postalpincode.in/pincode/${this.pickupPincode}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (data[0].Status === 'Success') {
      const postOffice = data[0].PostOffice[0];
      this.pickup = `${postOffice.State}`;
    } else {
      this.pickup = 'Invalid Pincode';
    }
  }

  async getDropupState() {
    const url = `https://api.postalpincode.in/pincode/${this.dropupPincode}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (data[0].Status === 'Success') {
      const postOffice = data[0].PostOffice[0];
      this.dropup = `${postOffice.State}`;
    } else {
      this.dropup = 'Invalid Pincode';
    }
  }



  async sendData() {

    var body = {
      DestinationLocation: this.DestinationLocation,
      OriginLocation: this.OriginLocation,
      pickupState: this.pickup,
      dropupState: this.dropup,
      Number: '12345678',
      date: this.date,
      product: this.product,
      Quantity: this.Quantity,
      vehicle: this.vehicle,
      loadCapacity: this.loadCapacity,
      expectedPrice: this.expectedPrice,
      data: this.data,
      typeOfPay: this.typeOfPay,
      length: this.length,
      breadth: this.breadth,
      height: this.height,
      comments: this.comments
    }
    console.log(body)
    fetch("http://localhost:3000/quotes/generateQuote", {
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
        this.Items = result
      
        const alert = await this.alertController.create({
          header: 'Successfull',
          message: 'Load posted Successfully',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
                //you can write your code or redirection 
                // sample redirection code 
                window.location.href = '/tabs/tab1';

              }
            }
          ],
        });

        await alert.present();


      }

      ).catch(err =>
        console.log(err))

  }


  


}


