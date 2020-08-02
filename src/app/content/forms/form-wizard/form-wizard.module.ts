import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../../_layout/blockui/block-template.component';
import { FormwizardComponent } from './formwizard/formwizard.component';
import { facturaControllerService } from 'src/app/api/facturaController.service';
import { afiliacionControllerService } from 'src/app/api/afiliacionController.service';
import { NotificationService } from 'src/app/api/notificacion/notification.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    FormsModule,
    NgbDatepickerModule,
    ArchwizardModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: '',
        component: FormwizardComponent
      },
    ])
  ],
  declarations: [FormwizardComponent],
  providers: [
    facturaControllerService,
    afiliacionControllerService,
    NotificationService
  ],
  exports: [RouterModule]
})
export class FormWizardModule { }
