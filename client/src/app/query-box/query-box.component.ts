import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-query-box',
  templateUrl: './query-box.component.html',
  styleUrls: ['./query-box.component.scss']
})
export class QueryBoxComponent implements OnInit {
  query = '';
  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  getResults() {
    this.queryService.queryResults(this.query);
  }

}
