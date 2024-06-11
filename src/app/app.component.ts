import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  total=0;
  qty=0;
  prodname:string="";
  foodmenu=[
    {id:1,name:"Bread",price:30,description:"Banana Bread",img:"/assets/Banana-Bread.jpeg"},
    {id:2,name:"cookies",price:30,description:"chocolate cookies",img:"/assets/cookies.jpeg"},
    {id:3,name:"croissant",price:20,description:"Mixed croissant",img:"/assets/croissant.jpeg"},
    {id:4,name:"cupcake",price:20,description:"Toffe cupcake",img:"/assets/Cupcake.jpeg"}
  ]

  sum(event:any , price:number)
  {
    const ischecked:boolean=event.target.checked
    if(ischecked)
      {
        this.total=this.total+price
        this.qty+=1;
      }
      else{
        this.total=this.total-price
        this.qty-=1;
      }
  }

  Find(foodmenu :any[]){

    return foodmenu.filter(item =>item.name.toLowerCase().includes(this.prodname.toLowerCase()))
  }


  title = 'menu';
}
