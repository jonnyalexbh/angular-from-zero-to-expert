import { Component, Input } from "@angular/core";
import { WishesService } from "../services/wishes.service";
import { NavController } from "ionic-angular";
import { AddPage } from "../pages/add/add.component";
import { List } from "../models";

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html'
})
export class ListsComponent {

  @Input() completed: boolean = false;

  constructor(public wishesService: WishesService,
    private navCtrl: NavController) {

  }

  /**
   * listSelected
   *
   */
  listSelected(list: List) {
    this.navCtrl.push(AddPage, {
      title: list.title,
      list: list
    });
  }

  /**
   * deleteList
   *
   */
  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }

}
