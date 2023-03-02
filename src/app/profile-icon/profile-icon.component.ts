import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../service/guard.service';


@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss']
})
export class ProfileIconComponent implements OnInit {
   name: any;
   email: any;
  


  constructor(private router:Router,private auth:GuardService) { }

  ngOnInit(): void {

    this.name=localStorage.getItem('user')
    this.email=localStorage.getItem('email')
  }



  public logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('user');
    this.auth.isAuthenticated(false);
    this.router.navigate(['login'])

  }



}
