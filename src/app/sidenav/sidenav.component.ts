import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() public sidebarShow: boolean = false;

  constructor(private router:Router) { }

  public role:any=localStorage.getItem('role');

  ngOnInit(): void {
  }
  
  public data=[
    {
      text:'View Products',
      url:'products',
      role:'user'
    },
    {
      text:'Checkout',
      url:'cartlist',
      role:'user'
    },
    {
      text:'My orders',
      url:'myorders',
      role:'user'
    },
    {
     text:'support ',
     role:'user'
 
    },
    {
      text:'help',
      role:'user'

    },
    {
      text:'login',
      url:'login',
      role:'user'

    },
    {
      text:'sign-up',
      url:'register',
      role:'user'
    }
  ]

  public data2=[
  {
    text:'View Products',
    url:'products',
    role:'admin'
  },
  {
    text:'Add Products',
    url:'addproducts',
    role:'admin',
  },
  {
    text:'All orders',
    role:'admin'
  },
  {
   text:'support ',
   role:'admin'
  },
  {
    text:'help',
    role:'admin'
  }
]

  public redirectTo(path:any) {
    this.router.navigate([path])
    this.sidebarShow=false;
    }

}
