import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {

  @ViewChild(IonSlides)
  slides!: IonSlides;
  data: any;
  item: any = [];

  objects: any;

  fb: any;

  real: any;
  products: any;
  result: any;

  Id: any;
  updateproductForm: any;
  slideOpts = {
    
  };

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }
  out(data: any) {
    console.log(data)
    this.data = data
  }
  ngOnInit() {



    this.objects = localStorage.getItem("currentSelectedLoad");  //use the localstorage we getdata from savedData
    //The localStorage object allows you to save key/value pairs in the browser.
    this.real = JSON.parse(this.objects)  //parse() The JSON. parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

    console.log(this.objects)
    //this.get()

    this.updateproductForm = this.formBuilder.group({
      OriginLocation: [''],
      DestinationLocation: [''],
      date: [''],
      // vehicle: [''],
      product: [''],
      Quantity: [''],

      expectedPrice: [''],
      //tonnes:[''],
      Number: [''],
      //loadCapacity:[''],

      typeOfPay: [''],
      paymentTypeForOffline: [''],
      advance: [''],
      comments: [''],
      length: [''],
      breadth: [''],
      height: [''],
      pickupState:[''],
      dropupState:[''],
      data: ['']
    })
  }

  // get() {
  //   console.log(this.Id)
  //   fetch("http://localhost:3000/postLoad/loadById/" + this.Id, {
  //     method: 'GET',
  //     headers: {
  //       "access-Control-Allow-Origin": "*",
  //     },


  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result),
  //         this.products = result
  //       console.log(this.products)



  //       var dd = this.updateproductForm.setValue({
  //         OriginLocation: this.result.OriginLocation,
  //         DestinationLocation: this.result.DestinationLocation,
  //         date: this.result.date,
  //        // vehicle: this.result.vehicle,
  //         product: this.result.product,
  //         Quantity: this.result.Quantity,
  //         expectedPrice: this.result.expectedPrice,
  //         //tonnes: this.result.tonnes,
  //         Number: this.result.Number,
  //         //loadCapacity: this.result.loadCapacity,
  //         typeOfPay: this.result.typeOfPay,
  //         comments: this.result.comments,
  //         length: this.result.length,
  //         breadth: this.result.breadth,
  //         height: this.result.height,
  //         data:this.result.data
  //       });

  //       console.log(dd)
  //     },


  //     ).catch(err =>
  //       console.log(err))
  // }
  updateForm(data: any) {


    var body = {
      DestinationLocation: this.updateproductForm.value.DestinationLocation,
      OriginLocation: this.updateproductForm.value.OriginLocation,
      pickupState: this.updateproductForm.value.pickup,
      dropupState: this.updateproductForm.value.dropup,
      Number: '12345678',
      date: this.updateproductForm.value.date,
      product: this.updateproductForm.value.product,
      Quantity: this.updateproductForm.value.Quantity,
      vehicle: this.updateproductForm.value.vehicle,
      
      expectedPrice: this.updateproductForm.value.expectedPrice,
      data: this.data,
      typeOfPay: this.updateproductForm.value.typeOfPay,
     
      
      comments: this.updateproductForm.value.comments
    }



    console.log(data)
    //console.log(this.description, this.image, this.price, this.description, this.name)
    console.log(this.real._id)
    fetch("http://localhost:3000/quotes/updateQuotes/" + this.real._id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),

          this.products = JSON.parse(result)  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions

        this.updateproductForm.reset();   // form reset
        window.location.reload()  // reloading window

      }

      ).catch(err =>
        console.log(err))
  }
  

  slidePrev() {
    this.slides.slidePrev();
  }

  slideNext() {
    this.slides.slideNext();
  }



}




