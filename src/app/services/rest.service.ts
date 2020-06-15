import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  newAviso:any;
  constructor(public Http: HttpClient) {}

  ngOnInit(){
  }
  
getAviso(){
  var api_url="https://localhost:44394/api/avisos/GetAvisoItems";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
getAvisoPorProvincia(provincia_id:string){
  var api_url="https://localhost:44394/api/filtros/GetAvisoItems/provincia/"+provincia_id;
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  
  }, err => {
    console.log(err);
  })
    )
}
getAvisoPorProvinciaYLocalidad(provincia_id:string,localidad_id:string){
  var api_url="https://localhost:44394/api/filtros/GetAvisoItems/pl/"+provincia_id+"/"+localidad_id;
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
  this.newAviso=datos;
  let options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
 var url = 'https://localhost:44394/api/avisos/AddAvisoItems';
 return new Promise(resolve => {
  this.Http.post(url,JSON.stringify(datos),options)
     .subscribe(data => {
       resolve(data);
      });
 });
 
}
getAvisoOrden(orden:string,avisos:any){
  
  let options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if(orden=="fecha"){
    var url = 'https://localhost:44394/api/filtros/GetAvisoItemsOrdenFecha';
    return new Promise(resolve => {
     this.Http.post(url,JSON.stringify(avisos),options)
        .subscribe(data => {
          resolve(data);
         });
    });
  }
  if(orden=="alfabetico"){
    var url = 'https://localhost:44394/api/filtros/GetAvisoItemsOrdenAlfabetico';
    return new Promise(resolve => {
     this.Http.post(url,JSON.stringify(avisos),options)
        .subscribe(data => {
          resolve(data);
         });
    });
  }
}
getSupermercados(){
  var api_url="https://localhost:44394/api/supermercados/GetSupermercados";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  }, err => {
    console.log(err);
  })
    )
}
getProvincias(){
  var api_url="https://localhost:44394/api/ubicacion/GetProvincias";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  }, err => {
    console.log(err);
  })
    )
}
getLocalidades(){
  var api_url="https://localhost:44394/api/ubicacion/GetLocalidades";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  }, err => {
    console.log(err);
  })
    )
}
getEstadisticasProductos(){
  var api_url="https://localhost:44394/api/estadisticas/estadisticasProductos";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  }, err => {
    console.log(err);
  })
    )
}
getEstadisticasSupermercados(){
  var api_url="https://localhost:44394/api/estadisticas/estadisticasSupermercados";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  }, err => {
    console.log(err);
  })
    )
}

getEstadisticasTotalAvisos(){
  var api_url="https://localhost:44394/api/estadisticas/estadisticasTotalAvisos";
  return new Promise (resolve =>
  this.Http.get(api_url).subscribe(data => {
  resolve(data);
  }, err => {
    console.log(err);
  })
    )
}
}
