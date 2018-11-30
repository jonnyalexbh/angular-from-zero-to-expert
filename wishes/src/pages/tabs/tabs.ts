import { Component } from '@angular/core';

import { SlopesPage } from '../slopes/slopes.component';
import { FinishedPage } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SlopesPage;
  tab2Root = FinishedPage;

  constructor() {

  }
}
