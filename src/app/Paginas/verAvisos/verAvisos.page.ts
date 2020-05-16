import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-verAvisos',
  templateUrl: './verAvisos.page.html',
  styleUrls: ['./verAvisos.page.scss'],
})
export class VerExistenciasPage implements OnInit {
avisos:any;

  constructor(public servicioGet:RestService) {
    //this.ngOnInit();
   }

  ngOnInit() {
    this.verAvisos();
    
  }
  verAvisos(){
    this.ocultar();
    this.servicioGet.getAviso().then(data => {
      this.avisos=data;
      console.log(this.avisos);
      if(this.avisos==""){
       // this.Items=data;
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
    this.servicioGet.getAvisoBuscados(palabraClave).then(data => {
      this.avisos=data;
      console.log(this.avisos);
      if(this.avisos==""){
       // this.Items=data;
       this.mostrar();
        console.log("vaciooo");
      }
      
      if(palabraClave==""){
        this.verAvisos();
        this.ocultar();
      }
    }).catch(data => {
      console.log(data);
    })

    //Avisos ordenados

    
    
  }
  mostrar() {
   document.getElementById("mostrar").style.visibility="visible";
  }
  ocultar(){
    document.getElementById("mostrar").style.visibility="hidden";
  }

  avisosOrden(orden:string){
    //var orden=ev.itemForm.value;
    console.log(orden);
    
    this.servicioGet.getAvisoOrden(orden).then(data => {
      this.avisos=data;
      console.log(this.avisos);
    });
  }
}
