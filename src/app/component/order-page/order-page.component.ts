import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{
  public totalamount :number=0;
  constructor(private api:ApiService, private router:Router){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(["/"])
      this.api.removeCartData();
    }, 4000);
    // totalamount
    this.totalamount = this.api.calculaterprice();
  }

}
