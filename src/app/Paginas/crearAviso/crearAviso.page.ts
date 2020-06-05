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
  constructor(public servicioPost:RestService,public arrayService:ArrayServiceService) {}

  ngOnInit() {
    this.cargarSelectSupermercados();
    this.cargarSelectProvincias();
  }

  postAviso(supermercado_id:string, provincia_id:string, localidad_id:string,producto:string, comentario:string){

    this.datos={"supermercado_id":supermercado_id,"provincia_id":provincia_id, "localidad_id":localidad_id,"producto":producto,"comentario":comentario};
    console.log(this.datos);
  
      this.crearAviso();
      //añadir al array el  aviso nuevo
    this.arrayTodos=this.arrayService.getAvisos();
    var id=this.arrayTodos.length+1;//ver que pasa con la fecha en el backend y aqui
    this.arrayNewAvisoCreado={"id":id,"supermercado_id":supermercado_id,"provincia_id":provincia_id, "localidad_id":localidad_id,"producto":producto,"comentario":comentario}
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
    //conseguir las localidades
    this.servicioPost.getLocalidades().then(data => {
      this.arrayService.crearArrayLocalidades(data,this.idProvincia);
      //this.localidades=this.arrayService.getLocalidades();
      this.cargarSelectLocalidades();
    });

  }

  cargarSelectSupermercados(){
    this.servicioPost.getSupermercados().then(data => {
      //this.arrayService.crearArraySupermercados(data);
      this.supermercados=data;
    });
  }
  cargarSelectProvincias(){
    this.servicioPost.getProvincias().then(data => {
     // this.arrayService.crearArrayProvincias(data);
      this.provincias=data;
    });
  }
  cargarSelectLocalidades(){
    this.localidades=this.arrayService.getLocalidades();
  }
  
}
