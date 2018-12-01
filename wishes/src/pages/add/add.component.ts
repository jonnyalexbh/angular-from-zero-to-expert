import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";
import { List } from "../../models";

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {

  constructor(public wishesService: WishesService) {

  }

}
