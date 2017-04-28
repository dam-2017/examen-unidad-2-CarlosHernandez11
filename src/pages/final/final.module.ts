import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Final } from './final';

@NgModule({
  declarations: [
    Final,
  ],
  imports: [
    IonicPageModule.forChild(Final),
  ],
  exports: [
    Final
  ]
})
export class FinalModule {}
