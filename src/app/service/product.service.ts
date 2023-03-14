import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  

  public singleItemId:any
  public singleItemList:any=[]
  public requestOptions:any=[]

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
   const headers = new HttpHeaders({
      'Content-Type':'application/json;charset=utf-8',
      'Content-Length': '80'

      


    });

  this.requestOptions = { headers: headers };

  }

  // getProducts() {
  //   return this.http.get(environment.BASEURL).pipe(map((data:any)=>data.products))
  // }

  public getProducts() {
      return this.http.get(environment.BASEURL);
  }

  public addProducts(data:any) {
    return this.http.post(environment.BASEURL,data);
  }
  
 
  public removeProducts(data:string){
    console.log("in service",data)
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

  public updateProducts(data:any,id:any){
    return this.http.put(environment.BASEURL+`?id=${id}`,data,this.requestOptions)
  }




  

  
}
