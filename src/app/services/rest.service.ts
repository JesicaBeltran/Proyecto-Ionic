import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  newAviso:any;
  constructor(public Http: HttpClient) {}

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


//PETICION GET AVISOS BUSQUEDA

getAvisoBuscados(palabraClave:string){
  var dato=palabraClave;
  var api_url="https://localhost:44394/api/GetAvisoItemsBuscador/"+dato;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}

//PETICION POST A API
postAviso(arrayNewAviso: any){

  let datos = arrayNewAviso;
  this.newAviso=datos;
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
       console.log(data);
      });
 });
 
}

//Ordenar avisos
getAvisoOrden(orden:string){
  var dato=orden;
  var api_url="https://localhost:44394/api/GetAvisoItemsOrden/"+dato;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
//POR SUPERMERCADO
getAvisoSupermercado(localidad:string, supermercado:string){
  var api_url="https://localhost:44394/api/GetAvisoSupermercado/"+localidad+"/"+supermercado;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
//POR PRODUCTO

getAvisoProducto(localidad:string, producto:string){
  var api_url="https://localhost:44394/api/GetAvisoProducto/"+localidad+"/"+producto;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}

}
