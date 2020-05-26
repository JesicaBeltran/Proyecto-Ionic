import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ArrayServiceService } from '../../services/array-service.service';

@Component({
  selector: 'app-ver-por-supermercado',
  templateUrl: './ver-por-supermercado.page.html',
  styleUrls: ['./ver-por-supermercado.page.scss'],
})
export class VerPorSupermercadoPage implements OnInit {
array:any;
  constructor(public servicioGet:RestService,public arrayService:ArrayServiceService) { }

  ngOnInit() {
    
  }
  verAvisosSupermercado(localidad:string, supermercado:string){

    this.servicioGet.getAvisoSupermercado(localidad,supermercado).then(data => {
      
      this.array=data;
     
      console.log(this.array);//si
      this.arrayService.crearAvisosSupermercado(this.array,localidad,supermercado);
    });
    
  }
}
