import { Component } from "@angular/core";
import { WishesService } from "../../services/wishes.service";
import { List } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AddPage } from "../add/add.component";

@Component({
  selector: 'page-slopes',
  templateUrl: 'slopes.component.html'
})
export class SlopesPage {

  /**
   * constructor
   *
   */
  constructor(public wishesService: WishesService,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  /**
   * listSelected
   *
   */
  listSelected(list: List) {
    console.log(list);
  }

  /**
   * addList
   *
   */
  addList() {

    const alert = this.alertCtrl.create({
      title: 'New list',
      message: "name of the new list that you want",
      inputs: [
        {
          name: 'title',
          placeholder: 'name of the list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Add',
          handler: data => {
            if (data.title.length === 0) {
              return;
            }
            this.navCtrl.push(AddPage, {
              title: data.title
            });
            console.log(data);
          }
        }
      ]
    });

    alert.present();

  }

}
