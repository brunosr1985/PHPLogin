import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Bemvindo} from "./bemvindo";

@NgModule({
  declarations: [
    Bemvindo,
  ],
  imports: [
    IonicPageModule.forChild(Bemvindo),
  ],
})
export class BemvindoPageModule {}
