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
    this.cargarSelectSupermercados();
    this.cargarSelectProvincias();
  }
  ionViewWillEnter(){
    this.verTodosAvisos();
    //cuando carga la pagina el array de aqui es igual que el que se guarda en el arrayservice
    this.arrayAvisos=this.arrayService.getAvisos();
    this.provincias=this.arrayService.getProvincias();
    this.supermercados=this.arrayService.getSupermercados();
    this.localidades=this.arrayService.getLocalidades();
  }
  
  verTodosAvisos(){
    //poner valor por defecto en select
    document.getElementById("provinciaSelect").setAttribute("value","");
    document.getElementById("localidadSelect").setAttribute("value","");
    document.getElementById("supermercadoSelect").setAttribute("value","");

    this.ocultar();
   
    this.servicioGet.getAviso().then(data => {
     
     this.arrayService.crearArrayAvisos(data);
      this.arrayAvisos=this.arrayService.getAvisos();
      console.log(this.arrayAvisos);
      if(this.arrayAvisos==""){
       this.mostrar();
        console.log("vaciooo");
      }else{
        this.ocultar();
      }
    }).catch(data => {
      console.log(data);
    })
  }
  
  
  //Avisos encontrados del buscador
  avisosEncontrados(ev: any){
    var palabraClave=ev.target.value;
    console.log(palabraClave);
    this.ocultar();
    
    this.arrayAvisos=this.arrayService.getAvisosBuscados(palabraClave);
    
    //var avisoEncontrado=[];
   // console.log(this.arrayAvisos);
   // console.log(avisoEncontrado);
     if(this.arrayAvisos==""){
       // this.Items=data;
       this.mostrar();
       
      }
      
      if(palabraClave==""){
       
        this.ocultar();
      }
  }
 
  avisosOrden(orden:string){
    console.log(orden);
    
    this.servicioGet.getAvisoOrden(orden).then(data => {
      this.arrayAvisos=data;
      console.log(this.arrayAvisos);
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
    console.log(this.idProvincia);
    //conseguir las localidades
    this.servicioGet.getLocalidades().then(data => {
      this.arrayService.crearArrayLocalidades(data,this.idProvincia);
      this.localidades=this.arrayService.getLocalidades();
    });
    //coger avisos de esa provincia
    this.verAvisosPorProvincia(this.idProvincia);
  }
  enviarLocalidad(ev: any){
    this.idLocalidad=ev.target.value;
   this.verAvisosPorProvinciaYLocalidad(this.idProvincia,this.idLocalidad);
  }
  enviarSupermercado(ev: any){
    this.idSupermercado=ev.target.value;
  
    if(this.idProvincia == null && this.idLocalidad == null){
    this.verAvisosPorSupermercado(this.idSupermercado);
    }
    if(this.idProvincia != null && this.idLocalidad != null){
   this.verAvisosPorProvinciaYLocalidadYSupermercado(this.idProvincia,this.idLocalidad,this.idSupermercado);
    }
    //si prov no es null pero localidad si(buscar por super y localidad)
    if(this.idProvincia != null && this.idLocalidad == null){
      console.log("buscas por provincia y super")
      this.verAvisosPorProvinciaYSupermercado(this.idProvincia,this.idSupermercado);
    }
  }
 
  verAvisosPorProvincia(provincia_id:string){
    this.servicioGet.getAvisoPorProvincia(provincia_id).then(data => {
      this.arrayService.crearArrayPorProvincia(data);
      this.arrayAvisos=this.arrayService.getAvisos();
    });
  }

  verAvisosPorProvinciaYLocalidad(provincia_id:string,localidad_id:string){
    this.servicioGet.getAvisoPorProvinciaYLocalidad(provincia_id,localidad_id).then(data => {
      this.arrayService.crearArrayPorProvinciaYLocalidad(data);//aun no existe
      this.arrayAvisos=this.arrayService.getAvisos();
    });
  }
  verAvisosPorProvinciaYLocalidadYSupermercado(provincia_id:string,localidad_id:string,idsupermercado:string){
    this.servicioGet.getAvisoPorProvinciaYLocalidadYSupermercado(provincia_id,localidad_id,idsupermercado).then(data => {
      this.arrayService.crearArrayPorProvinciaYLocalidadYSupermercado(data);//aun no existe
      this.arrayAvisos=this.arrayService.getAvisos();
    });
  }
  verAvisosPorSupermercado(idsupermercado:string){
    this.servicioGet.getAvisoPorSupermercado(idsupermercado).then(data => {
      this.arrayService.crearArrayPorSupermercado(data);
      this.arrayAvisos=this.arrayService.getAvisos();
      console.log(this.arrayAvisos);
    });
  }
  verAvisosPorProvinciaYSupermercado(idProvincia:string,idSupermercado:string){
    this.servicioGet.getAvisoPorProvinciaYSupermercado(idProvincia,idSupermercado).then(data => {
      console.log(data);
      this.arrayService.crearArrayPorProvinciaYSupermercado(data);
      this.arrayAvisos=this.arrayService.getAvisos();
      console.log(this.arrayAvisos);
    });
  }
  mostrar() {
    document.getElementById("mostrar").style.visibility="visible";
   }
   ocultar(){
     document.getElementById("mostrar").style.visibility="hidden";
   }
}
