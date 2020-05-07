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
    this.servicioGet.ngOnInit().then(data => {
      this.avisos=data;
      console.log(this.avisos);
      if(this.avisos==""){
       // this.Items=data;
        console.log("vaciooo");
      }
    }).catch(data => {
      console.log(data);
    })
  }

}
