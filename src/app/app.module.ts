import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/registration/registration';
import { BrowsePage } from '../pages/browse/browse';
import { CharitydetailsPage } from '../pages/charitydetails/charitydetails';
import { DonationsPage } from '../pages/donations/donations';
import { PaymentPage } from '../pages/payment/payment'
import { IntegtutorialPage } from '../pages/integtutorial/integtutorial';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BrowsePage,
    CharitydetailsPage,
    DonationsPage,
    PaymentPage,
    IntegtutorialPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BrowsePage,
    CharitydetailsPage,
    DonationsPage,
    PaymentPage,
    IntegtutorialPage,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}


