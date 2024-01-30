import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/shared/models/search-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Input()
  searchResult!: any;

  term = 'loja';

  changeSearchTemplate(term: string) {
    this.term = term
  }

  ngOnInit() {
    console.log(this.searchResult)
  }
}
