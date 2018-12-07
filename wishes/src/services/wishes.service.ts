import { Injectable } from "@angular/core";
import { List, } from "../models/index";

@Injectable()
export class WishesService {

  lists: List[] = [];

  /**
   * constructor
   *
   */
  constructor() {
    this.loadStorage();
    // const list1 = new List('collect infinity stones');
    // const list2 = new List('heroes to beat');

    // this.lists.push(list1, list2);
    // console.log(this.lists);

  }

  /**
   * addList
   *
   */
  addList(list: List) {
    this.lists.push(list);
    this.saveStorage();
  }

  /**
   * deleteList
   *
   */
  deleteList(list: List) {
    this.lists = this.lists.filter(listData => {
      return listData.id !== list.id;
    });

    this.saveStorage();
  }

  /**
   * saveStorage
   *
   */
  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  /**
   * loadStorage
   *
   */
  loadStorage() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
    else {
      this.lists = [];
    }
  }

}
