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

    if (this.navParams.get('list')) {
      this.list = this.navParams.get('list');
    } else {
      this.list = new List(title);
      this.wishesService.addList(this.list);
    }
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

    this.wishesService.saveStorage();
    this.nameItem = '';
  }

  /**
   * addItem
   *
   */
  updateTask(item: ListItem) {
    item.completed = !item.completed;

    const pending = this.list.items.filter(itemData => {
      return !itemData.completed;
    }).length;

    if (pending === 0) {
      this.list.completed = true;
      this.list.finishedIn = new Date();
    }
    else {
      this.list.completed = false;
      this.list.finishedIn = null;
    }

    this.wishesService.saveStorage();
  }

  /**
   * delete
   *
   */
  delete(idx: number) {
    this.list.items.splice(idx, 1);
    this.wishesService.saveStorage();
  }

}
