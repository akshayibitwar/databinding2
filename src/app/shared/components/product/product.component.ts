import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public productName : string = "Apple";
public productName2 : string = "Realme";
public productId : number = 10
public isDisable : boolean = true;
public prdStatus : string = "Product Not Added Yet..!!!!" 
public cartCount : number = 0;
// public removecart : number = 1;
public isVisible : boolean = true;
public NewproductStatus : string = "Same Product is here...!!!"
public onSearchproduct !: string;
  constructor() { }

  ngOnInit(): void {
  setTimeout(() => {
    this.isDisable = false;
  }, 1000);

  setTimeout(() => {
    this.isVisible = false;
  }, 1000);
  }

  onAddProduct() {
    console.log("Btn is Click...!!!")
    this.cartCount ++ ; 

    if(this.cartCount === 1){
      this.prdStatus = `${this.cartCount} Product is added in cart...!!!`;
    }else{
      this.prdStatus = `${this.cartCount} Products is added in cart...!!!`;
    }
  }

  onremovePrd() {
    console.log("Product Remove Succsessfully....!!!")
    this.cartCount -- ;

    if(this.cartCount < 1){
      this.prdStatus = `No Product is Added Yet...!!!`;
    }else{ 
      this.prdStatus = `${this.cartCount} Products is added in cart...!!!`;
    }
  }

  onNewItemAdd() {
    console.log("New item Added..!!")
    this.NewproductStatus = "New Item Added Susscessfully...!!!"
  }

  onProductSearch(eve : Event) {
    let val = (eve.target as HTMLInputElement).value;
    console.log(val);
    this.onSearchproduct = val;
  }
  
}

