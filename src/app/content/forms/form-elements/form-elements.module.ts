import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { InputGridComponent } from './input-grid/input-grid.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { BlockUIModule } from 'ng-block-ui';
import { CustomFormsModule } from 'ngx-custom-validators';
import { BlockTemplateComponent } from '../../../_layout/blockui/block-template.component';

import { facturaControllerService } from 'src/app/api/facturaController.service';

import { NotificationService } from 'src/app/api/notificacion/notification.service';
import { afiliacionControllerService } from 'src/app/api/afiliacionController.service';
import { ClientesService } from '../../../services/clientes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiSwitchModule,
    NgSelectModule,
    NgbModule,
    CustomFormsModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'form-inputs',
        component: FormInputsComponent
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent
      },
      {
        path: 'input-grid',
        component: InputGridComponent
      }
    ])
  ],
  declarations: [FormInputsComponent, InputGroupsComponent, InputGridComponent],
  providers: [
    facturaControllerService,
    afiliacionControllerService,
    ClientesService,
       NotificationService
  ],
  exports: [RouterModule]
})
export class FormElementsModule { }
