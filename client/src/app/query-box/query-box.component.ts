import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-box',
  templateUrl: './query-box.component.html',
  styleUrls: ['./query-box.component.scss']
})
export class QueryBoxComponent implements OnInit {
  query = '';
  constructor() { }

  ngOnInit(): void {
  }

  getResults() {
    console.log(this.query);
  }

}
