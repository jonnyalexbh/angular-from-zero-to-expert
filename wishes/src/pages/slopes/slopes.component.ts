import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";

@Component({
  selector: 'page-slopes',
  templateUrl: 'slopes.component.html'
})
export class SlopesPage {

  constructor(public wishesService: WishesService) {

  }

}
