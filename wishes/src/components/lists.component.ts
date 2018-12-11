import { Component, Input } from "@angular/core";
import { WishesService } from "../services/wishes.service";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { AddPage } from "../pages/add/add.component";
import { List } from "../models";

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html'
})
export class ListsComponent {

  @Input() completed: boolean = false;

  constructor(public wishesService: WishesService,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {

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
   * editList
   *
   */
  editList(list: List, slidingItem: ItemSliding) {

    slidingItem.close();

    const alert = this.alertCtrl.create({
      title: 'Edit name',
      message: "edit the name of the list",
      inputs: [
        {
          name: 'title',
          placeholder: 'name of the list',
          value: list.title,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Save',
          handler: data => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title;
            this.wishesService.saveStorage();
          }
        }
      ]
    });

    alert.present();
  }

  /**
   * deleteList
   *
   */
  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }

}
