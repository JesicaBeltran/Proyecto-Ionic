import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(public Http: HttpClient) { }
//PETICION GET A API REST
  ngOnInit(){
    var api_url="https://localhost:44394/api/GetAvisoItems";
    return new Promise (resolve =>
    this.Http.get(api_url).subscribe(data => {
    resolve(data);
    
    }, err => {
      console.log(err);
    })
      )
}

}
