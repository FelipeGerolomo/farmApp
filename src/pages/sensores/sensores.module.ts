import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensoresPage } from './sensores';
import { Chart } from 'chart.js';
@NgModule({
  declarations: [
    SensoresPage,
  ],
  imports: [
    IonicPageModule.forChild(SensoresPage),
  ],
})
export class SensoresPageModule {}
