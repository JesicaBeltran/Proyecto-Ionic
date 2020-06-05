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
getAvisoPorProvincia(provincia_id:string){
  var api_url="https://localhost:44394/api/GetAvisoItems/provincia/"+provincia_id;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
getAvisoPorSupermercado(supermercado_id:string){
  var api_url="https://localhost:44394/api/GetAvisoItems/supermercado/"+supermercado_id;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}

getAvisoPorProvinciaYLocalidad(provincia_id:string,localidad_id:string){
  var api_url="https://localhost:44394/api/GetAvisoItems/pl/"+provincia_id+"/"+localidad_id;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
getAvisoPorProvinciaYSupermercado(provincia_id:string,supermercado_id:string){
  var api_url="https://localhost:44394/api/GetAvisoItems/ps/"+provincia_id+"/"+supermercado_id;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  console.log(data);
  }, err => {
    console.log(err);
  })
    )
}

getAvisoPorProvinciaYLocalidadYSupermercado(provincia_id:string,localidad_id:string,supermercado_id:string){
  var api_url="https://localhost:44394/api/GetAvisoItems/pls/"+provincia_id+"/"+localidad_id+"/"+supermercado_id;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}

//PETICION GET AVISOS BUSQUEDA

/*getAvisoBuscados(localidad_id:string,supermerado_id:string,palabraClave:string){
  
  var api_url="https://localhost:44394/api/GetAvisoItems/"+localidad_id+"/"+supermerado_id+"/"+palabraClave;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}*/

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

//supermercados
getSupermercados(){
  var api_url="https://localhost:44394/api/GetSupermercados";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  console.log(data);
  }, err => {
    console.log(err);
  })
    )
}
getProvincias(){
  var api_url="https://localhost:44394/api/GetProvincias";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  console.log(data);
  }, err => {
    console.log(err);
  })
    )
}
getLocalidades(){
  var api_url="https://localhost:44394/api/GetLocalidades";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  console.log(data);
  }, err => {
    console.log(err);
  })
    )
}



}
