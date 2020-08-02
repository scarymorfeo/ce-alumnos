import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRepeaterComponent } from './form-repeater.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../../_layout/blockui/block-template.component';
import { NotificationService } from 'src/app/api/notificacion/notification.service';
import { afiliacionControllerService } from 'src/app/api/afiliacionController.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: '',
        component: FormRepeaterComponent
      },
    ])
  ],
  declarations: [FormRepeaterComponent],
  providers: [
    afiliacionControllerService,
    NotificationService
  ],
  exports: [RouterModule]
})
export class FormRepeaterModule { }
