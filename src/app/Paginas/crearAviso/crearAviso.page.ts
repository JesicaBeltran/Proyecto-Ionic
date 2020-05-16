import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-crearAviso',
  templateUrl: './crearAviso.page.html',
  styleUrls: ['./crearAviso.page.scss'],
})
export class ExistenciasPage implements OnInit {

arrayNewAviso:any;
  constructor(public servicioPost:RestService) { 
    //this.supermercado = this.supermercado;

  }

  ngOnInit() {
  }

  crearAviso(supermercado: string, producto: string, comentario: string){
    this.arrayNewAviso={"supermercado":supermercado,"producto":producto, "comentario":comentario};
    console.log(this.arrayNewAviso);
    this.getAvisoCreado();
    

  }

  getAvisoCreado(){

    this.servicioPost.postAviso(this.arrayNewAviso).then(data => {
      this.arrayNewAviso=data;
      console.log(this.arrayNewAviso);
     
    }).catch(data => {
      console.log(data);
    })
  
  }

}
