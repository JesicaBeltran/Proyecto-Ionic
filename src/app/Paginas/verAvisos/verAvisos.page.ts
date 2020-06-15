import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ArrayServiceService } from '../../services/array-service.service';

@Component({
  selector: 'app-verAvisos',
  templateUrl: './verAvisos.page.html',
  styleUrls: ['./verAvisos.page.scss'],
})

export class VerExistenciasPage implements OnInit {

arrayAvisos:any;
newAviso:any;
supermercados:any;
provincias:any;
localidades:any;

idProvincia:string;
idLocalidad:string;
idSupermercado:string;

  constructor(public servicioGet:RestService,public arrayService:ArrayServiceService) {
  }
  ngOnInit() {
    this.verTodosAvisos();
    
    this.cargarSelectProvincias();
  }
  ionViewWillEnter(){
    this.verTodosAvisos();
    this.arrayAvisos=this.arrayService.getAvisos();
    this.provincias=this.arrayService.getProvincias();
    this.supermercados=this.arrayService.getSupermercados();
    this.localidades=this.arrayService.getLocalidades();
  }
  
  verTodosAvisos(){
    
    document.getElementById("provinciaSelect").setAttribute("value","");
    document.getElementById("localidadSelect").setAttribute("value","");
    document.getElementById("buscador").setAttribute("value","");
    document.getElementById("ordenar").setAttribute("value","");
    document.getElementById("localidadSelect").setAttribute("disabled","true");

    this.ocultarMensajeSinResultados();
    this.servicioGet.getAviso().then(data => {
     
     this.arrayService.crearArrayAvisos(data);
      this.arrayAvisos=this.arrayService.getAvisos();
      
      if(this.arrayAvisos==""){
       this.mostrarMensajeSinResultados();
      }else{
        this.ocultarMensajeSinResultados();
      }
    }).catch(data => {
    })
   
  }
  
  avisosEncontrados(ev: any){
    var palabraClave=ev.target.value;
    this.ocultarMensajeSinResultados();
   
    this.arrayAvisos=this.arrayService.getAvisosBuscados(palabraClave);
     if(this.arrayAvisos==""){
       this.mostrarMensajeSinResultados();
       
      }
      if(palabraClave==""){
        this.ocultarMensajeSinResultados();
      }
  }
 
  avisosOrden(orden:string){
   
    this.servicioGet.getAvisoOrden(orden,this.arrayAvisos).then(data => {
      this.arrayAvisos=data;
    });
    
  }
  cargarSelectSupermercados(){
    this.servicioGet.getSupermercados().then(data => {
      this.arrayService.crearArraySupermercados(data);
    });
  }
  cargarSelectProvincias(){
    this.servicioGet.getProvincias().then(data => {
      this.arrayService.crearArrayProvincias(data);
    });
  }
  cargarSelectLocalidades(){
    this.localidades=this.arrayService.getLocalidades();
  }
 
  enviarProvincia(ev: any){
    this.idProvincia=ev.target.value;
    this.servicioGet.getLocalidades().then(data => {
      this.arrayService.crearArrayLocalidades(data,this.idProvincia);
      this.localidades=this.arrayService.getLocalidades();
    });
   
    this.verAvisosPorProvincia(this.idProvincia);
    document.getElementById("localidadSelect").setAttribute("disabled","false");
    document.getElementById("localidadSelect").setAttribute("value","");
  }
  enviarLocalidad(ev: any){
    this.idLocalidad=ev.target.value;
   this.verAvisosPorProvinciaYLocalidad(this.idProvincia,this.idLocalidad);
  }
 
  verAvisosPorProvincia(provincia_id:string){
    this.servicioGet.getAvisoPorProvincia(provincia_id).then(data => {
      this.arrayService.crearArrayPorProvincia(data);
      this.arrayAvisos=this.arrayService.getAvisos();
    });
  }

  verAvisosPorProvinciaYLocalidad(provincia_id:string,localidad_id:string){
    this.servicioGet.getAvisoPorProvinciaYLocalidad(provincia_id,localidad_id).then(data => {
      this.arrayService.crearArrayPorProvinciaYLocalidad(data);
      this.arrayAvisos=this.arrayService.getAvisos();
    });
  }


  mostrarMensajeSinResultados() {
    document.getElementById("mostrar").style.visibility="visible";
   }
   ocultarMensajeSinResultados(){
     document.getElementById("mostrar").style.visibility="hidden";
   }
   
}
