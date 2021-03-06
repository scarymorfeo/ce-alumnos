import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { productosControllerService } from '../../../../api/productosController.service';
import { NotificationService } from '../../../../api/notificacion/notification.service';

@Component({
  selector: 'app-horizontal-forms',
  templateUrl: './horizontal-forms.component.html',
  styleUrls: ['./horizontal-forms.component.css']
})
export class HorizontalFormsComponent implements OnInit {

      // llenar selects
      catUnidadMedida: any[];
      requestUnidadMedida: any;

  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @BlockUI('userProfile') blockUIUserProfile: NgBlockUI;

  public breadcrumb: any;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];

  projectInfo: FormGroup;
  userProfile: FormGroup;
  timeSheet: FormGroup;
  eventRegistration: FormGroup;

  constructor(private _productosControllerService: productosControllerService,
    private _notifyService : NotificationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Horizontal Forms',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Form Layouts',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Horizontal Forms',
          'isLink': true

        }
      ]
    };

    this.projectInfo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      interestedIn: ['', Validators.required],
      budget: ['', Validators.required],
      selectFile: ['', Validators.required],
      aboutProject: ['', Validators.required],
    });

    this.userProfile = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      nickName: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      bio: ['', Validators.required]
    });

    this.timeSheet = this.formBuilder.group({
      employeeName: ['', Validators.required],
      projectname: ['', Validators.required],
      date: ['', Validators.required],
      ratePerHour: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      notes: ['', Validators.required]
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', Validators.required],
      title: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      customer1: ['', Validators.required]
    });
    this.getUnidadMedida();
  }
       //obtiene los datos de unidad de medida , recorre lista, obtiene el id y descripcion para cargarlos en el select.
       getUnidadMedida() {
        this._productosControllerService.ListaUnidadMedida(this.requestUnidadMedida)
          .subscribe(
            (datos:any) => {
                  this.catUnidadMedida = datos.lista;
                  console.log(datos.lista)  
            },
            error => {
              this._notifyService.showError("Error", "Recuperación Forma de Pagos !!");
              console.log('Error : Recuperación Forma de Pagos !!' + error);
            });
      }

  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }

  reloadUserProfile() {
    this.blockUIUserProfile.start('Loading..');

    setTimeout(() => {
      this.blockUIUserProfile.stop();
    }, 2500);
  }

}
