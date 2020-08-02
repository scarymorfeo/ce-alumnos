import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { facturaControllerService } from '../../../../api/facturaController.service';
import { NotificationService } from '../../../../api/notificacion/notification.service';
import { afiliacionControllerService } from '../../../../api/afiliacionController.service';

declare var require: any;

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {
    // llenar selects
    catFormaPago: any[];
    requestFormaPago: any;

    catMetodoPago: any[];
    requestMetodoPago: any;

    catMoneda: any[];
    requestMoneda: any;




  @ViewChild('labelImport', { static: true })
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;



  public breadcrumb: any;
  multipleMultiSelect: any;
  public focucedElement = '';

  constructor(
    private _facturaControllerService: facturaControllerService,
    private _notifyService : NotificationService,
    private _afiliacionControllerService: afiliacionControllerService
  ) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Form Basic Elements',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Form',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Basic Elements',
          'isLink': false
        }
      ]
    };
    this.getFormaPago();
    this.getMetodoPago();
    this.getMoneda();

  }
     //obtiene los datos de forma de pago, recorre lista, obtiene el id y descripcion para cargarlos en el select.
     getFormaPago() {
      this._facturaControllerService.ListaFormaPago(this.requestFormaPago)
        .subscribe(
          (datos:any) => {
                this.catFormaPago = datos.lista;
                console.log(datos.lista)  
          },
          error => {
            this._notifyService.showError("Error", "Recuperación Forma de Pagos !!");
            console.log('Error : Recuperación Forma de Pagos !!' + error);
          });
    }

    getMetodoPago() {
      this._facturaControllerService.ListaMetodoPago(this.requestMetodoPago)
        .subscribe(
          (datos:any) => {
                this.catMetodoPago = datos.lista;
                console.log(datos.lista)  
          },
          error => {
            this._notifyService.showError("Error", "Recuperación Forma de Pagos !!");
            console.log('Error : Recuperación Forma de Pagos !!' + error);
          });
    }

    getMoneda() {
      this._facturaControllerService.ListaMoneda(this.requestMoneda)
        .subscribe(
          (datos:any) => {
                this.catMoneda = datos.lista;
                console.log(datos.lista)  
          },
          error => {
            this._notifyService.showError("Error", "Recuperación Forma de Pagos !!");
            console.log('Error : Recuperación Forma de Pagos !!' + error);
          });
    }

  focusElement(focucedElement: any) {
    this.focucedElement = focucedElement;
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }
}
