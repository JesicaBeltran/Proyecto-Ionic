import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {
  avisos:any;
  avisosSupermercado:any;
  localidad:string;
  supermercado:string;

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
  getAvisos(){
    return this.avisos;
  }
  getAvisosSupermercado(){
    console.log(this.avisosSupermercado);
    return this.avisosSupermercado;
  }
  getLocalidad(){
    return this.localidad;
  }
  getSupermercado(){
    return this.supermercado;
  }
}
