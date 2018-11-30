import { ListItem } from "./list-item.model";

export class List {
  id: number;
  title: string;
  createdIn: Date;
  finishedIn: Date;
  completed: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.title = title;
    this.completed = false;
    this.createdIn = new Date();
    this.items = [];

    this.id = new Date().getTime();
  }
}
