import { action, makeObservable, observable } from 'mobx';

export interface Log {
  message: string;
}

export class Logger {
  logs: Log[] = [];

  constructor() {
    makeObservable(this, {
      logs: observable,
      print: action,
    });
  }

  print(message: string) {
    this.logs.push({ message });
  }
}
