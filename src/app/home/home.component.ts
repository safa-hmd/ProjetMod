import { Component } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  color="blue";
  nameFilter:string="";

  
  title:string="Welcome 4SE1";
  product:Product[]=[
    {id :1,name:"Laptop", price:1000, quantity:5,like:0},
    {id :2,name:"Smartphone", price:500, quantity:10,like:0},
    {id :3,name:"Tablet", price:300, quantity:7,like:0}
 ]

 save():void{
   alert("Hello from save method");
 }
 nbrLikes(p:Product):void{
   p.like++;
   //2eme methode:(recherche par index)
  //this.product[i].like++;
  
  //3eme methode:(recherche par id)
  //let index=this.product.findIndex((p:any)=> p.id==p.id);
  
 }

 buy(p:Product):void{
    if(p.quantity>0){
      p.quantity--;
    }else{
      alert("product out of stock");
    }
  
   }
  
}
