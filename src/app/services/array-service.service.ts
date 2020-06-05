import { Injectable } from '@angular/core';
import { NgForOf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {
  
  avisos:any;
  localidad:string;
  supermercado:string;
  producto:string;
  provincias:any;
  supermercados:any;
  todasLocalidades:any;
  localidades:any[] = [];
  resultadoBusqueda:any;

  constructor() { }
  crearArraySupermercados(data:any){
    this.supermercados=data;
  }
  crearArrayProvincias(data:any){
    this.provincias=data;
  }
  crearArrayLocalidades(data:any,idProvincia:string){
    this.localidades=[];
    this.todasLocalidades=data;
   

     this.todasLocalidades.forEach(element => {
     
     if(element['provincia_id'] === idProvincia){
     
    this.localidades.push(element);
     }
   });
  
  }

  crearArrayAvisos(data:any){
    this.avisos=data;
  }
  crearArrayPorProvincia(data:any){
    this.avisos=data;
  }
  crearArrayPorSupermercado(data:any){
    this.avisos=data;
  }
  crearArrayPorProvinciaYSupermercado(data:any){
    this.avisos=data;
  }
  crearArrayPorProvinciaYLocalidad(data:any){
    this.avisos=data;
  }
  crearArrayPorProvinciaYLocalidadYSupermercado(data:any){
    this.avisos=data;
  }
  agregarNuevoAviso(avisoNuevo:any){
    this.avisos.push(avisoNuevo);
  }
  getAvisos(){
    return this.avisos;
  }

  getAvisosBuscados(palabraClave:string){
//buscar en arrayavisos
this.resultadoBusqueda=[];
this.avisos.forEach(element => {
 
  if(element['producto'].includes(palabraClave)){
    this.resultadoBusqueda.push(element);
  }
});
console.log(this.resultadoBusqueda);
return this.resultadoBusqueda;
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
  getProvincias(){
    return this.provincias;
  }
  getSupermercados(){
    return this.supermercados;
  }
  getLocalidades(){
    return this.localidades;
  }
  
}
