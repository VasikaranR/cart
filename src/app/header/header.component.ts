import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  public sidebarShow: boolean = false;
  public cartProductCount:number=0; 
  public cartItems: any;
  public show:boolean=false;

  constructor(private cartService:CartService,private router:Router) { }

  public ngOnInit(): void {
    this.cartService.getProducts().subscribe(data => {
      this.cartItems = data;
      this.cartProductCount=this.cartService.getCount();
    });
  }

  public showProfile(){
   setTimeout(()=>{
    this.show=false;
    },10000)

  this.show=true;
  }
  
  public  closeProfile() {
    this.show=false;
  }

  redirectTo(){
    this.router.navigate(['myorders'])
  }





  

}
