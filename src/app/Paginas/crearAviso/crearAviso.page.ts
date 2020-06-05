import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ArrayServiceService } from '../../services/array-service.service';

@Component({
  selector: 'app-crearAviso',
  templateUrl: './crearAviso.page.html',
  styleUrls: ['./crearAviso.page.scss'],
})
export class ExistenciasPage implements OnInit {

  datos:any;
  arrayNewAvisoCreado:any;
  arrayNewAviso:any;
  arrayTodos:any;
  supermercados:any;
  localidades:any;
  provincias:any;
  
  idProvincia:string;
  idAviso:string;

  constructor(public servicioPost:RestService,public arrayService:ArrayServiceService) {}

  ngOnInit() {
    this.cargarSelectSupermercados();
    this.cargarSelectProvincias();
  }

  postAviso(supermercado_id:string, provincia_id:string, localidad_id:string,producto:string, comentario:string){

    this.datos={"supermercado_id":supermercado_id,"provincia_id":provincia_id, "localidad_id":localidad_id,"producto":producto,"comentario":comentario};
    console.log(this.datos);
  
    this.crearAviso();

    this.arrayTodos=this.arrayService.getAvisos();
    this.idAviso=this.arrayTodos.length+1;
    this.arrayNewAvisoCreado={"id":this.idAviso,"supermercado_id":supermercado_id,"provincia_id":provincia_id, "localidad_id":localidad_id,"producto":producto,"comentario":comentario}
    this.arrayService.agregarNuevoAviso(this.arrayNewAvisoCreado);
  }

  crearAviso(){

    this.servicioPost.postAviso(this.datos).then(data => {
      this.arrayNewAviso=data;
    
      console.log(this.arrayNewAviso);
     
    }).catch(data => {
      console.log(data);
    })
  }
  enviarProvincia(ev: any){
    this.idProvincia=ev.target.value;
    this.servicioPost.getLocalidades().then(data => {
      this.arrayService.crearArrayLocalidades(data,this.idProvincia);
      this.cargarSelectLocalidades();
    });

  }
  cargarSelectSupermercados(){
    this.servicioPost.getSupermercados().then(data => {
      this.supermercados=data;
    });
  }
  cargarSelectProvincias(){
    this.servicioPost.getProvincias().then(data => {
      this.provincias=data;
    });
  }
  cargarSelectLocalidades(){
    this.localidades=this.arrayService.getLocalidades();
  }
}
