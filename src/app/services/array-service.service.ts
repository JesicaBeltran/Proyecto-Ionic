import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {
  avisos:any;
  avisosSupermercado:any;
  avisosProducto:any;
  localidad:string;
  supermercado:string;
  producto:string;
  constructor() { }
  

  crearArrayAvisos(data:any){
    this.avisos=data;
  }
  agregarNuevoAviso(avisoNuevo:any){
    this.avisos.push(avisoNuevo);
  }
  crearAvisosSupermercado(data:any,localidad:string, supermercado:string){
    this.avisosSupermercado=data;
    this.localidad=localidad;
    this.supermercado=supermercado;
  }
  crearAvisosProducto(data:any,localidad:string, producto:string){
    this.avisosProducto=data;
    this.localidad=localidad;
    this.producto=producto;
  }
  getAvisos(){
    return this.avisos;
  }
  getAvisosSupermercado(){
    console.log(this.avisosSupermercado);
    return this.avisosSupermercado;
  }
  getAvisosProducto(){
    console.log(this.avisosProducto);
    return this.avisosProducto;
  }
  getLocalidad(){
    return this.localidad;
  }
  getSupermercado(){
    return this.supermercado;
  }
  getProducto(){
    return this.producto;
  }
}
