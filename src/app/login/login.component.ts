import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from '../service/guard.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService, private router:Router,private toaster:ToastrService , private auth:GuardService) { }
  loginForm!:FormGroup;

  ngOnInit(): void {

    this.loginForm=this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern('')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^([A-Z]{1})[a-z0-9]{7,11}$')]),

    })
  }

  public login(){

    let useremail=this.loginForm.value.email;
    let password = this.loginForm.value.password;

    this.userService.authenticateUsers(useremail).subscribe((data:any)=>{
      
      if(data[0].password==password){

        this.toaster.success(`welcome ${data[0].firstName}`, 'Login Success!');

        localStorage.setItem('user',data[0].firstName);

        localStorage.setItem('email',data[0].email);

        localStorage.setItem('role','user');

        this.auth.isAuthenticated(true);

        this.router.navigate(['/products']);
      }
      else
      {
      
        this.toaster.error('invalid User','Invalid');
      }
    })
  
  }

}
