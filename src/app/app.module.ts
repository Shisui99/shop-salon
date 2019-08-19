import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputFormatDirective } from './input-format.directive';
import { SaloonDetailComponent } from './saloon-detail/saloon-detail.component';
// import { CheckOut } from './check-out.new-order/check-out.new-order.component';
import { NewOrderComponent } from './check-out/new-order/new-order.component';
import { OldOrderComponent } from './check-out/old-order/old-order.component';
import { AllOrderComponent } from './check-out/all-order/all-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    LoginComponent,
    SignupComponent,
    InputFormatDirective,
    SaloonDetailComponent,
    // CheckOut.NewOrderComponent,
    NewOrderComponent,
    OldOrderComponent,
    AllOrderComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'salon/my/order', component: CheckOutComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'my/orders', component: MyOrderComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: 'admin/orders', component: AdminOrdersComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      { path: 'product', component:ProductsComponent},
      {path:'saloon/:id',component:SaloonDetailComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
