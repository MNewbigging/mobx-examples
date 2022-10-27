import { action, makeObservable, observable } from 'mobx';

export interface IListItem {
  id: string;
}

export class ListState {
  items: IListItem[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      addListItem: action,
    });

    [1, 2, 3, 4].forEach(() => this.addListItem());
  }

  addListItem = () => {
    this.items.push({ id: this.createId() });
  };

  removeListItem = (id: string) => {
    this.items = this.items.filter((item) => item.id !== id);

    // const toRemove = this.items.findIndex((item) => item.id === id);
    // this.items.splice(toRemove, 1);
  };

  private createId(length: number = 4) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789';

    let id = '';
    for (let i = 0; i < length; i++) {
      const rnd = Math.floor(Math.random() * characters.length);
      id += characters.charAt(rnd);
    }

    return id;
  }
}
