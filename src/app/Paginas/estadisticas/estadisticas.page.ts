import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RestService } from '../../services/rest.service';
import { ArrayServiceService } from '../../services/array-service.service';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  bars: any;
  colorArray: any;
  arraydatosSupermercado = [];
  arraydatosProducto=[];
  a:any;
  totalAvisos:any;

  constructor(public servicioGet:RestService,public arrayService:ArrayServiceService) { }

  ngOnInit() {
    
    this.getEstadisticasSupermercados();
    this.getEstadisticasProductos();
    this.getTotalAvisos();
    this.showChart();
    this.showChartBarras();
  }
  ionViewWillEnter(){
    this.totalAvisos=this.arrayService.totalAvisos;
  }
  showChartBarras(){
    var densityData = {
      label: 'Producto básico agotado',
      data: this.arraydatosProducto
    };

    var ctx = (<any>document.getElementById('densityChart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ["Pan", "Leche", "Huevos", "Papel Higiénico"],
        datasets: [densityData]
       }
    });
  }
  showChart() {
    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["Dia", "Mercadona", "Aldi", "Carrefour", "El Jamón"],
        datasets: [{
              label: "This is chart",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              data: this.arraydatosSupermercado,
              borderWidth: 1
        }]
       }
    });
  }
  getEstadisticasProductos(){
    this.servicioGet.getEstadisticasProductos().then(data => {
      this.a=data;
      this.a.forEach(element => {
        this.arraydatosProducto.push(element);
      });
     }).catch(data => {
     });
  }
getEstadisticasSupermercados(){
  this.servicioGet.getEstadisticasSupermercados().then(data => {
    this.a=data;
    this.a.forEach(element => {
      this.arraydatosSupermercado.push(element);
    });
   }).catch(data => {
     
   });
}
  getTotalAvisos(){
    this.servicioGet.getEstadisticasTotalAvisos().then(data => {
      this.totalAvisos=data;
      this.arrayService.totalAvisos=this.totalAvisos;
     }).catch(data => {
     });
  }
}
