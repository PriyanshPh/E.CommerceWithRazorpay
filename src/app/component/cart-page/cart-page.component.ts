import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productModal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var Razorpay:any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  showproduct:any=[];
  public addressForm = false;
  selectedOption: string = '';
  public totalamount :number=0;
  data:any={}
  myForm:FormGroup|any;
  constructor(private api:ApiService, private router:Router){}
  submitOption() {

    if (this.selectedOption === 'C') {
      this.router.navigateByUrl('/order-page');
    } else if(this.selectedOption === 'A') {
      //this.router.navigateByUrl('/order-page');
      const RozarpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: this.totalamount*10000,
        name: 'Razorpay',
        key: "rzp_test_gpGesIPEFjmq8Z",
        image: 'https://th.bing.com/th/id/OIP.3915OPu9nRGi5zVY36VyQgHaFj?rs=1&pid=ImgDetMain',
        handler: (response: any) => {
          // This function executes when the payment is successful
          if (response.razorpay_payment_id) {
            // Redirect to another page on successful payment
            window.location.href = '/order-page'; // Replace '/success' with your success page URL
          }
        },
        prefill: {
          name: 'Enter Your Name',
          email: 'example@gmail.com',
          phone: 'Your 10 digit number',
        },
        theme: {
          color: '#f37254'
        },
        modal: {
          ondismiss: () => {
            console.warn('dismissed')
          }
        }
      }

      const successCallback = (paymentid: any) => {
        console.log(paymentid);
      }

      const failureCallback = (e:any) => {
        console.warn(e);
      }

      Razorpay.open(RozarpayOptions, successCallback, failureCallback);

    }else{
      alert('Please Select Payment Type');
    }
  }
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showproduct = res;
      this.totalamount = this.api.calculaterprice();
      console.log("Total amount is:", this.totalamount);
    })
    // Form
  this.myForm = new FormGroup({
    email:new FormControl ('',Validators.required),
    name:new FormControl ('',Validators.required),
    mobile:new FormControl ('',Validators.required),
    address:new FormControl ('',Validators.required),
  })
  }
  delete(item:product){
    this.api.removecartitem(item);
  }
  Empty(){
    this.api.removeCartData();
  }
  cancel(){
    this.addressForm = false;
    this.myForm.reset();
  }
  onClick(){
    this.myForm.value;
    console.warn(this.myForm.value)
    this.myForm.reset();
  }
}
