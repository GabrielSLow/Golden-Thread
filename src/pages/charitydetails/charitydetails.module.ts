import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharitydetailsPage } from './charitydetails';

@NgModule({
  declarations: [
    CharitydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CharitydetailsPage),
  ],
})
export class CharitydetailsPageModule {}
