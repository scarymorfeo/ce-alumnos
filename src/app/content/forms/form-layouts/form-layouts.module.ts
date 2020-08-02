import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicFormsComponent } from './basic-forms/basic-forms.component';
import { HorizontalFormsComponent } from './horizontal-forms/horizontal-forms.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../../_layout/blockui/block-template.component';


import { productosControllerService } from 'src/app/api/productosController.service';

import { NotificationService } from 'src/app/api/notificacion/notification.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([{
        path: 'basic-forms',
        component: BasicFormsComponent
      },
      {
        path: 'horizontal-forms',
        component: HorizontalFormsComponent
      }
    ])
  ],
  declarations: [BasicFormsComponent, HorizontalFormsComponent],
    providers: [
      productosControllerService,
         NotificationService
    ],
  exports: [RouterModule]
})
export class FormLayoutsModule { }
