import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(public Http: HttpClient) { }

  ngOnInit(){
    
}
//PETICION GET A API REST
getAviso(){
  var api_url="https://localhost:44394/api/GetAvisoItems";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
postAviso(arrayNewAviso: any){

  let datos = arrayNewAviso;
  
  let options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
 var url = 'https://localhost:44394/api/AddAvisoItems';
 return new Promise(resolve => {
  this.Http.post(url,JSON.stringify(datos),options)
     .subscribe(data => {
       resolve(data);
      });
 });
  
}


}
