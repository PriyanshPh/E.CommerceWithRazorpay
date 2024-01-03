import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productModal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  productdata:any|product[];
  showadd:boolean = true;
  showremove:boolean = false;
  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    //console.log("product id is", productid);
    productid && this.api.getproductbyid(productid).subscribe((res)=>{
      this.productdata = res;
      console.log(res);
    })
  }
  addtocart(){
    this.showadd = false;
    this.showremove = true;
  }
  removeitem(){
    this.showremove = false;
    this.showadd = true;
  }

}
