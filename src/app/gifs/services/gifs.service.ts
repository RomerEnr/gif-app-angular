import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private tagsHistory: string[] = [];

  constructor() { }

  get tagsHistoryList(): string[] {
    return [...this.tagsHistory];
  }

  public searchTag(tag: string): void {
    this.tagsHistory.unshift(tag);
  }
}
