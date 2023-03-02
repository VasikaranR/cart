import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addUsers(data:any) {
    return  this.http.post(environment.USERURL,data);

  }

  public authenticateUsers(data:any){
    return this.http.get(`${environment.USERURL}?email=${data}`);
  }

  public getProfileInfo(data:any){
    return this.http.get(`${environment.USERURL}?email=${data}`)
  }
}

