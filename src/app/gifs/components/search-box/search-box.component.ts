import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) { }

  public searchTag(): void {
    const newTag = this.txtTagInput.nativeElement.value
    this.gifService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
  }
}
