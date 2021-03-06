import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// components
import { SlopesPage } from '../pages/slopes/slopes.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { AddPage } from '../pages/add/add.component';
import { ListsComponent } from '../components/lists.component';

// services
import { WishesService } from '../services/wishes.service';

// pipes
import { FilterCompletedPipe } from '../pipes/filter-completed/filter-completed';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SlopesPage,
    FinishedPage,
    AddPage,
    FilterCompletedPipe,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SlopesPage,
    FinishedPage,
    AddPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
