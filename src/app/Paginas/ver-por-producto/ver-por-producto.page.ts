import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ArrayServiceService } from '../../services/array-service.service';

@Component({
  selector: 'app-ver-por-producto',
  templateUrl: './ver-por-producto.page.html',
  styleUrls: ['./ver-por-producto.page.scss'],
})
export class VerPorProductoPage implements OnInit {
  array:any;
  constructor(public servicioGet:RestService,public arrayService:ArrayServiceService) { }

  ngOnInit() {
  }
  verAvisosProducto(localidad:string, producto:string){

    this.servicioGet.getAvisoProducto(localidad,producto).then(data => {
      
      this.array=data;
     
      console.log(this.array);//si
      this.arrayService.crearAvisosProducto(this.array,localidad,producto);
    });
    
  }
}
