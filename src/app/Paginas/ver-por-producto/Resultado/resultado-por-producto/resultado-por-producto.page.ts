import { Component, OnInit } from '@angular/core';
import { ArrayServiceService } from '../../../../services/array-service.service';

@Component({
  selector: 'app-resultado-por-producto',
  templateUrl: './resultado-por-producto.page.html',
  styleUrls: ['./resultado-por-producto.page.scss'],
})
export class ResultadoPorProductoPage implements OnInit {

  arrayAvisosProducto:any;
  localidad:string;
  producto:string;

  constructor(public arrayService:ArrayServiceService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.arrayAvisosProducto=this.arrayService.getAvisosProducto();
    console.log(this.arrayAvisosProducto);//
    this.localidad=this.arrayService.getLocalidad();
    this.producto=this.arrayService.getProducto();

  }
}
