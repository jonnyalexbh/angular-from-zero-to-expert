import { Injectable } from "@angular/core";
import { List, } from "../models/index";

@Injectable()
export class WishesService {

  lists: List[] = [];

  constructor() {
    const list1 = new List('collect infinity stones');
    const list2 = new List('heroes to beat');

    this.lists.push(list1, list2);
    console.log(this.lists);

  }

}
