import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { afiliacionControllerService } from '../../../../api/afiliacionController.service';
import { NotificationService } from '../../../../api/notificacion/notification.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgbDateStruct, NgbTimeStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Paises } from '../../../../model/formaPago/paises/paises';
import { RegimenFiscal } from '../../../../model/regimenFiscal/regimenFiscal';
import { CodigoPostal } from '../../../../model/codigoPostal/codigoPostal';

import { ClientesService } from '../../../../services/clientes.service';
import { Cliente } from 'src/app/model/cliente';


@Component({
  selector: 'app-formwizard',
  templateUrl: './formwizard.component.html',
  styleUrls: ['./formwizard.component.css']
})
export class FormwizardComponent implements OnInit {

  datosCliente: Cliente = new Cliente();

  // Llenar selects
  catPais: any[];
  requestPais: any;
  // data: Paises;

  catRegimenFiscal: any[];
  requestRegimenFiscal: any;
  // data: RegimenFiscal;

  catCodigoPostal: any[];
  requestCodigoPostal: any;

  

  @BlockUI('numberTabs') blockUINumberTabs: NgBlockUI;
  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;

  options = {
    minimize: true,
    reload: true,
    expand: true,
    close: true
  };
  d2: any;
  d3: any;
  d4: any;
  d5: any;
  model: NgbDateStruct;
  popupModel;
  numberTab: FormGroup;
  iconTab: FormGroup;
  verticalTab: FormGroup;

  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;
  stepFourForm: FormGroup;

  displayMonthsForStep1 = 1;

  displayMonthsForStep3 = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  isStepFourReached = false;
  isStepThreeReached = false;
  isStepTwoReached = false;
  isStepOneReached = false;


  countries = ['Amsterdam', 'Berlin', 'Frankfurt'];
  eventType = ['Banquet', 'Fund Raiser', 'Dinner Party', 'Wedding'];
  eventLocation = ['Amsterdam', 'Berlin', 'Frankfurt'];
  eventStatus = ['Planning', 'In Progress', 'Finished'];
  requirements1 = [{ id: 1, name: 'Staffing' }, { id: 2, name: 'Catering' }];
  requirements2 = [{ id: 3, name: 'Staffing' }, { id: 4, name: 'Catering' }];
  requirements3 = [{ id: 5, name: 'Staffing' }, { id: 6, name: 'Catering' }];
  requirements4 = [{ id: 7, name: 'Staffing' }, { id: 8, name: 'Catering' }];
  agendaItems1 = [{ id: 1, name: '1st item', idName: 'item1' }, { id: 2, name: '2st item', idName: 'item2'},
                  { id: 3, name: '3st item', idName: 'item3' }, { id: 4, name: '4st item', idName: 'item4' },
                  { id: 5, name: '5st item', idName: 'item5' }];
  agendaItems2 = [{ id: 6, name: '1st item', idName: 'item6' }, { id: 7, name: '2st item', idName: 'item7'},
                  { id: 8, name: '3st item', idName: 'item8' }, { id: 9, name: '4st item', idName: 'item9' },
                  { id: 10, name: '5st item', idName: 'item10' }];
  agendaItems3 = [{ id: 11, name: '1st item', idName: 'item11' }, { id: 12, name: '2st item', idName: 'item12'},
                  { id: 13, name: '3st item', idName: 'item13' }, { id: 14, name: '4st item', idName: 'item14' },
                  { id: 15, name: '5st item', idName: 'item15' }];
  agendaItems4 = [{ id: 16, name: '1st item', idName: 'item16' }, { id: 17, name: '2st item', idName: 'item17'},
                  { id: 18, name: '3st item', idName: 'item18' }, { id: 19, name: '4st item', idName: 'item19' },
                  { id: 20, name: '5st item', idName: 'item20' }];

  public breadcrumb: any;

  constructor(
    private formBuilder: FormBuilder,
    private _afiliacionControllerService: afiliacionControllerService,
    private clientesService: ClientesService,
    private _notifyService: NotificationService
  ) { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Circle Style',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Form Wizard',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Form Wizard Circle Steps',
          'isLink': false
        }
      ]
    };

    this.numberTab = this.formBuilder.group({
      certificadoSello: [''],
      colonia: ['', Validators.required],
      cp: ['', Validators.required],
      domicilio: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', Validators.required],
      fiel: [''],
      lugarExpedicion: ['', Validators.required],
      municipio: ['', Validators.required],
      paisId: ['', Validators.required],
      razonSocial: ['', Validators.required],
      regimenFiscalId: ['', Validators.required],
      rfc: ['', Validators.required],
      telefono: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      passwd: ['', Validators.required]
    });
    this.iconTab = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthDate2: ['', [Validators.required]],
      proposalTitle: ['', Validators.required],
      jobTitle: ['', Validators.required],
      email2: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      videoURL: ['', [Validators.required]],
      eventName: ['', Validators.required],
      eventType: ['', Validators.required],
      eventLocation: ['', Validators.required],
      eventDate: ['', [Validators.required]],
      eventStatus: ['', [Validators.required]],
      requirementsArray: this.formBuilder.array(['', [Validators.required]]),
      meetingName: ['', Validators.required],
      location: ['', Validators.required],
      participantName: ['', Validators.required],
      decisionsReached: ['', Validators.required],
      agendaItems: this.formBuilder.array(['', [Validators.required]])
    });

    this.verticalTab = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthDate4: ['', [Validators.required]],
      proposalTitle: ['', Validators.required],
      jobTitle: ['', Validators.required],
      email2: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      videoURL: ['', [Validators.required]],
      eventName: ['', Validators.required],
      eventType: ['', Validators.required],
      eventLocation: ['', Validators.required],
      eventDate: ['', [Validators.required]],
      eventStatus: ['', [Validators.required]],
      requirementsArray: this.formBuilder.array(['', [Validators.required]]),
      meetingName: ['', Validators.required],
      location: ['', Validators.required],
      participantName: ['', Validators.required],
      decisionsReached: ['', Validators.required],
      agendaItems: this.formBuilder.array(['', [Validators.required]])
    });


    this.stepOneForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthDate3: ['']
    });

    this.stepTwoForm = this.formBuilder.group({
      proposalTitle: ['', Validators.required],
      jobTitle: ['', Validators.required],
      email2: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      videoURL: ['', [Validators.required]],
    });

    this.stepThreeForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventType: ['', Validators.required],
      eventLocation: ['', Validators.required],
      eventDate: [''],
      eventStatus: ['', [Validators.required]],
      requirementsArray: this.formBuilder.array(['', [Validators.required]])
    });

    this.stepFourForm = this.formBuilder.group({
      meetingName: ['', Validators.required],
      location: ['', Validators.required],
      participantName: ['', Validators.required],
      decisionsReached: ['', Validators.required],
      agendaItems: this.formBuilder.array(['', [Validators.required]])
    });

    this.getPais();
    this.getRegimenFiscal();
    this.getCodigoPostal();
  }

  // Obtiene los datos de paises
  getPais(){
    this._afiliacionControllerService.ListarPais(this.requestPais)
    .subscribe(
      (datos:any) =>{
        this.catPais = datos.lista;
        console.log(datos.lista);
      },
      error => {
        this._notifyService.showError("Error", "Recuperación de Pais");
        console.log('Error: Recuperación Pais ' + error);
      });
  }

  getRegimenFiscal() {
    this.clientesService.ListarRegimenFiscal(this.requestRegimenFiscal)
      .subscribe(
        (datos:any) => {
          this.catRegimenFiscal = datos.lista;
          console.log(datos.lista)  
        },
        error => {
          this._notifyService.showError("Error", "Recuperación Regimen Fiscal");
          console.log('Error : Recuperación Regimen Fiscal ' + error);
        });
  }

  guardaCliente() {
    let cliente = {
          certificadoSello: this.numberTab.get('certificadoSello').value,
          clienteId: 0,
          colonia: this.numberTab.get('colonia').value,
          cp: this.numberTab.get('cp').value,
          domicilio: this.numberTab.get('domicilio').value,
          email: this.numberTab.get('email').value,
          estado: this.numberTab.get('estado').value,
          fiel: this.numberTab.get('fiel').value,
          lugarExpedicion: this.numberTab.get('lugarExpedicion').value,
          municipio: this.numberTab.get('municipio').value,
          paisId: this.numberTab.get('paisId').value,
          razonSocial: this.numberTab.get('razonSocial').value,
          regimenFiscalId: this.numberTab.get('regimenFiscalId').value,
          rfc: this.numberTab.get('rfc').value,
          telefono: this.numberTab.get('telefono').value,
          usuario: {
            activo: true,
            nombreUsuario: this.numberTab.get('nombreUsuario').value,
            passwd: this.numberTab.get('passwd').value,
            usuarioId: 0
          }
    };
    console.log(cliente);
    this.clientesService.guardaCliente(cliente).subscribe(
        (datos: any) => {
              this._notifyService.showSuccess("Mensaje", "El cliente fue registrado exitosamente.");
              console.log(datos.estatus);  
        },
        error => {
          this._notifyService.showError("Error", "El cliente  no se pude regitrar");
          console.log('Error : El cliente  no se pude regitrar: ' + error);
        });
  }

  obtenDatosCP() {
    this.clientesService.obtenDatosCP(this.numberTab.get('cp').value)
      .subscribe(
        (datos: any) => {
          let datosCp = datos.dto;
          console.log(datosCp);
          this.numberTab.patchValue({'estado': datosCp.nombreEstado
          , 'municipio': datosCp.nombreMunicipio
          , 'lugarExpedicion': datosCp.nombreLocalidad
        });
        },
        error => {
          this._notifyService.showWarning("", "No existe ese código postal");
          console.log('Error : No existe ese código postal ' + error);
        });
  }


  getCodigoPostal() {
    this._afiliacionControllerService.ListarCodigoPostal(this.requestCodigoPostal)
      .subscribe(
        (datos:any) => {
          this.catCodigoPostal = datos.lista;
          console.log(datos.lista)  
        },
        error => {
          this._notifyService.showError("Error", "Recuperación Código Postal");
          console.log('Error : Recuperación Código Postal ' + error);
        });
  }

  public previousFourthStep() {
    this.isStepFourReached = true;
  }
  get f() {
    return this.stepOneForm.controls;
  }
  get i() {
    return this.stepTwoForm.controls;
  }
  get j() {
    return this.stepThreeForm.controls;
  }
  get k() {
    return this.stepFourForm.controls;
  }
  submit() {
    window.alert('Form submitted.');
  }

  reloadNumberTabs() {
    this.blockUINumberTabs.start('Loading..');

    setTimeout(() => {
      this.blockUINumberTabs.stop();
    }, 2500);
  }

  reloadIconTabs() {
    this.blockUIIconTabs.start('Loading..');

    setTimeout(() => {
      this.blockUIIconTabs.stop();
    }, 2500);
  }

   get email() { return this.numberTab.get('email'); }
   get razonSocial() { return this.numberTab.get('razonSocial'); }
   get colonia() { return this.numberTab.get('colonia'); }
   get cp() { return this.numberTab.get('cp'); }
   get domicilio() { return this.numberTab.get('domicilio'); }
   get estado() { return this.numberTab.get('estado'); }
   get lugarExpedicion() { return this.numberTab.get('lugarExpedicion'); }
   get municipio() { return this.numberTab.get('municipio'); }
   get paisId() { return this.numberTab.get('paisId'); }
   get regimenFiscalId() { return this.numberTab.get('regimenFiscalId'); }
   get rfc() { return this.numberTab.get('rfc'); }
   get telefono() { return this.numberTab.get('telefono'); }
   get nombreUsuario() { return this.numberTab.get('nombreUsuario'); }
   get passwd() { return this.numberTab.get('passwd'); }

}
