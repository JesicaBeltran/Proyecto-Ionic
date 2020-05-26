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
  constructor(public servicioPost:RestService,public arrayService:ArrayServiceService) {}

  ngOnInit() {
  }

  postAviso(supermercado: string, producto: string, comentario: string, localidad:string){

    this.datos={"supermercado":supermercado,"producto":producto, "comentario":comentario, "localidad":localidad};
    console.log(this.datos);
  
      this.crearAviso();
      //añadir al array el  aviso nuevo
    this.arrayTodos=this.arrayService.getAvisos();
    var id=this.arrayTodos.length+1;
    this.arrayNewAvisoCreado={"id":id,"supermercado":supermercado,"producto":producto, "comentario":comentario,"localidad":localidad}
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
  
}
