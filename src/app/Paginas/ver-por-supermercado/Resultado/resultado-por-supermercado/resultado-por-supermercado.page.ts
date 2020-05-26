import { Component, OnInit } from '@angular/core';
import { ArrayServiceService } from '../../../../services/array-service.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-resultado-por-supermercado',
  templateUrl: './resultado-por-supermercado.page.html',
  styleUrls: ['./resultado-por-supermercado.page.scss'],
})
export class ResultadoPorSupermercadoPage implements OnInit {
  arrayAvisosSupermercado:any;
  localidad:string;
  supermercado:string;

  constructor(public arrayService:ArrayServiceService) { }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.arrayAvisosSupermercado=this.arrayService.getAvisosSupermercado();
    console.log(this.arrayAvisosSupermercado);//
    this.localidad=this.arrayService.getLocalidad();
    this.supermercado=this.arrayService.getSupermercado();

  }

}
