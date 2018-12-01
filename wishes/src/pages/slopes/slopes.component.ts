import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";
import { List } from "../../models";

@Component({
  selector: 'page-slopes',
  templateUrl: 'slopes.component.html'
})
export class SlopesPage {

  constructor(public wishesService: WishesService) {

  }

  listSelected(list: List) {
    console.log(list);
  }

}
