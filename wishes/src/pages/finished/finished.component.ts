import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})
export class FinishedPage {

  constructor(public wishesService: WishesService) {

  }

}
