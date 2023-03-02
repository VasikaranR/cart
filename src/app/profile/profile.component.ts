import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileItems:any=[]

  constructor(private userservice:UserService) { 
}

  ngOnInit(): void {
   let  ProfileEmail =localStorage.getItem('email');
    this.userservice.getProfileInfo(ProfileEmail).subscribe({
      next:(data:any)=>{
          this.profileItems=data;
          console.log(this.profileItems)
      }
  
    });
  }

}
