import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { facturaControllerService } from '../../api/facturaController.service';
import { NotificationService } from '../../api/notificacion/notification.service';
import { FormaPago } from '../../../app/model/formaPago/formaPago';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.scss']
})
export class FacturarComponent implements OnInit {

  formaPagoIdA: number;
  formaPagoIdIA: number;
  idInternoA = new FormControl();
  internosSelect: any;

    // llenar selects
    requestFormaPago: any;
    listaFormaPago: any;
    formaPagoSelect: any;
    selectFormaPago = [];

    data: FormaPago;

  constructor(
    private _facturaControllerService: facturaControllerService,
    private _notifyService : NotificationService 
  ) { 
    this.inicializa();
  }

  ngOnInit(): void {
  }
    inicializa() {

      this.data = {
        formaPagoId: 0,
        descripcion: '',
        bancarizado: 0,
        numeroOperacion: '',
        fecIniVigencia: null,
        fecFinVigenci: null
      };
  }


  ocultarAlta(): void {
    this.formaPagoIdA = null;
    this.formaPagoIdIA = null;
  }

   //obtiene los datos de forma de pago, recorre lista, obtiene el id y descripcion para cargarlos en el select.
   getFormaPago() {
    this._facturaControllerService.ListaFormaPago(this.requestFormaPago)
      .subscribe(
        x => {

          this.requestFormaPago = x;
          this.requestFormaPago.lista
          console.log(this.requestFormaPago.lista);

          for (let i = 0; i < this.requestFormaPago.lista.length; i++) {

            let formaPagoId = this.requestFormaPago.lista[i].formaPagoId;
            let descripcion = this.requestFormaPago.lista[i].descripcion;
            this.selectFormaPago.push({ value: formaPagoId, label: descripcion });

          }

          this.formaPagoSelect = this.selectFormaPago;
          console.log(this.formaPagoSelect);
          console.log('Combo formaPago');

        },
        error => {
          this._notifyService.showError("Error", "Recuperación Forma de Pagos !!");
          console.log('Error : Recuperación Forma de Pagos !!' + error);
        });
  }

}
