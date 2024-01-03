import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './component/order-page/order-page.component';

//const Material = []
@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // RouterModule.forRoot([
    //   {path:'home', component:RestComponent},
    //   {path:'', redirectTo:'/home', pathMatch:'full'},
    //   {path:'**', component:RestComponent},
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
