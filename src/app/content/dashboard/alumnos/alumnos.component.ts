import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as Chartist from 'chartist';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ChartEvent, ChartType } from 'ng-chartist';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChartApiService } from '../../../_services/chart.api';
import { estudianteInfo } from 'src/app/model/estudianteInfo';
import { AlumnosService } from 'src/app/services/alumnosService';
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;

  responsiveOptions?: any;
  events?: ChartEvent;
}
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  @BlockUI('revenue') blockUIRevenue: NgBlockUI;
  @BlockUI('hitrate') blockUIHitRate: NgBlockUI;
  @BlockUI('email') blockUIEmail: NgBlockUI;

  public config: PerfectScrollbarConfigInterface = { suppressScrollY: true };
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  
  salesData: any;
  lineArea: any;
  earningchart: any;
  donutChart2: any;
  donutChart1: any;
  options = {
    bodyClass: ['pt-0'],
    close: false,
    expand: false,
    minimize: false,
    reload: true
  };

  

  data: any;

  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;
  Daygraph = true;
  Weekgraph = false;
  Monthgraph = false;
  datoUsuario: any;
  matriucla: String;
  name:any;
  apellidoPat: any;
  apellidoMat: any;
  curp: any;
  rfc: any;
  nss: any;
  genero: any;
  correo: any;
  semestre: any;
  fechaAlta: any;
  fechaBaja: any;
  fechaNacimiento: any;
  expediente: any;
  ngOnInit() {
   this.chartApiservice.getSalesData().subscribe(Response => {
      this.salesData = Response;

      });

      this.inicializa();
      this.datoUsuario = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.datoUsuario);
      this.consulta( this.datoUsuario.user);



  }


  inicializa() {

    this.data = {
    
      apellidoMat: '' ,
      apellidoPat: '',
      correo: '',
      curp: '',
      estatus: '',
      expediente: '',
      fechaAlta: null,
      fechaBaja: null,
      fechaNacimiento: null,
      genero: '',
      idAlumno: 0,
      nombre: 'hola',
      nss: '',
      rfc: '',
      semestre: 0
    }
  }

  constructor(private _renderer: Renderer2,
    private chartApiservice: ChartApiService, private _AlumnosService: AlumnosService) { }

    
    public consulta(matricula:String): void{
      const body = <any>{};
      this._AlumnosService.InfoAlumno(body,matricula)
      .subscribe(x => {
  
     this.data = x;
     this.name = this.data.nombre;
     this.apellidoMat = this.data.apellidoMat;
     this.apellidoPat = this.data.apellidoPat;
     this.curp = this.data.curp;
     this.rfc = this.data.rfc;
     this.nss = this.data.nss;
     this.genero = this.data.genero;
     this.correo = this.data.correo;
     this.semestre = this.data.semestre;
     this.fechaAlta = this.data.fechaAlta;
     this.fechaBaja = this.data.fechaBaja;
     this.fechaNacimiento = this.data.fechaNacimiento;
     this.expediente = this.data.expediente;

        console.log(this.data.nombre);
       
        },  
        error => {  
          console.log('Error al obtener la informacion del alumno' + error);  
        });  



    
    }

}
