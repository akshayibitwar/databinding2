import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public prdName : string = "Sony";
public prdId : number = 15
public isDisable : boolean = true;
public wasDisable :boolean = true;
  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isDisable = !this.isDisable;
    }, 1000);

    setTimeout(() => {
      this.wasDisable = !this.wasDisable;
    }, 1000);
  }

  
   
  getprdName(){
      return this.prdName;
    }
  
    ProductAdd() {
      console.log("Product Added Succsessfully...!!!")
    }

    Addfav() {
      console.log("fav item Added Succsessfully...!!!")
    }
}
