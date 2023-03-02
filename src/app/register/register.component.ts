import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
signInForm!: FormGroup;
  
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router,private toaster:ToastrService) { }


  ngOnInit(): void {
    this.signInForm=this.fb.group({
      firstName: new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
 
  public signIn(){
    this.userService.addUsers(this.signInForm.value).subscribe((data)=>{
      console.log("updated data ",data)
      this.showSuccess()
      this.router.navigate(['/login'])
    });

  }

  public showSuccess() {
    this.toaster.success('user added!', 'Registered Successfully!');
  }
}


