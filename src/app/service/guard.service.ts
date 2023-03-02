import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  userAuth:boolean=false;
  
  constructor( public router: Router) { }
  canActivate(): boolean {
    if(this.userAuth==true){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
    
  }

  isAuthenticated(data:boolean){
     if(data==true){
          return this.userAuth=true;
     }
     else{
       return this.userAuth=false;
     }
  }
}
