import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { 
  }

  public postMyOrders(data:any){
    console.log('yeah we got you ',data)
    return this.http.post(environment.ORDERURL,data);

  }

  public getMyOrders(){
    return this.http.get(environment.ORDERURL)
  }

  public updateOrders(email:any){
    return this.http.put(`${environment.BASEURL}?name`,email)
  }


}
