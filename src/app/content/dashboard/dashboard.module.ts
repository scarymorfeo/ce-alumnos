import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import {  AlumnosComponent } from './alumnos/alumnos.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ChartistModule,
    FormsModule,
    ChartsModule,
    NgxDatatableModule,
    PerfectScrollbarModule,
    NgbModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'alumno',
        component: AlumnosComponent
      },
    ])
  ],
  declarations: [AlumnosComponent],

  exports: [RouterModule]
})
export class DashboardModule { }
