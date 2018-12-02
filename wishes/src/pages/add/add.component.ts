import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";
import { List } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {

  list: List;

  /**
   * constructor
   *
   */
  constructor(public wishesService: WishesService,
    private navParams: NavParams) {
    const title = this.navParams.get('title');
    this.list = new List(title);
  }

}
