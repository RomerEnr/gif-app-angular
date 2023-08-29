import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList: Gif[] = [];

  private tagsHistory: string[] = [];
  private apiKey: string = 'Sou8UCF71lwhBWfAaKFcwWmXSwq6TJnj';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private httpClient: HttpClient) { }

  get tagsHistoryList(): string[] {
    return [...this.tagsHistory];
  }

  public searchTag(tag: string): void {
    if (tag.trim().length === 0) {
      return;
    }
    this.organizeTagsHistory(tag);
    // Método fetch
    // const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
    // const data = await resp.json();
    // console.log(data);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.httpClient.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifsList = resp.data;
        console.log(this.gifsList);
      });

  }

  private organizeTagsHistory(tag: string): void {
    tag = tag.toLowerCase();
    this.tagsHistory = [tag, ...this.tagsHistory.filter(tagHistory => tagHistory !== tag)].slice(0, 10);
  }
}
