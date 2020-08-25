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
  accurate = false;
  ngOnInit(): void {
  }

  getResults() {
    this.queryService.queryResults(this.query, this.accurate);
  }

  getToolTip() {
    if (this.accurate) {
      return 'The selected option is more accurate but slow because of compute limitations';
    }
    return 'This selected option might compromise on accuracy';
  }

  pressedEnter(event) {
    if (event.keyCode === 13) {
      this.getResults();
    }
    return;
  }
}
