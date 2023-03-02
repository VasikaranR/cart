import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  public singleItemId:any
  public singleItemList:any=[]

  constructor(private http:HttpClient) { }

  // getProducts() {
  //   return this.http.get(environment.BASEURL).pipe(map((data:any)=>data.products))
  // }

  public getProducts() {
      return this.http.get(environment.BASEURL);
  }

  public addProducts(data:any) {
    return this.http.post(environment.BASEURL,data);
  }
  
 
  public removeProducts(data:number){
    console.log("in service",typeof(+data))
    return this.http.delete(`${environment.BASEURL}?id=${data}`);
  }

  public getImages(){
    return this.http.get(environment.IMAGEURL);
  }

  public getSingleItem(singleItemId:any){
    this.singleItemId=singleItemId;
    return this.http.get(environment.BASEURL+`?id=${singleItemId}`)
  }

  public suggestProduct(categoryType:any){
    console.log("nn",categoryType)
    return this.http.get(environment.BASEURL+`?category=${categoryType}`)
  }




  

  
}
