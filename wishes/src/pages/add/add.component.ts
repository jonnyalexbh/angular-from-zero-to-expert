import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";
import { List, ListItem } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {

  list: List;
  nameItem: string = '';

  /**
   * constructor
   *
   */
  constructor(public wishesService: WishesService,
    private navParams: NavParams) {
    const title = this.navParams.get('title');
    this.list = new List(title);
  }

  /**
   * addItem
   *
   */
  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';
  }

  /**
   * addItem
   *
   */
  updateTask(item: ListItem) {
    item.completed = !item.completed;
  }

  /**
   * delete
   *
   */
  delete(idx: number) {
    this.list.items.splice(idx, 1);
  }

}
