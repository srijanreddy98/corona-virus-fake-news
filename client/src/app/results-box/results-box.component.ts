import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-results-box',
  templateUrl: './results-box.component.html',
  styleUrls: ['./results-box.component.scss']
})
export class ResultsBoxComponent implements OnInit {
  results = [];
  relevantQuery = true;
  netErr = false;
  loading = false;
  strs = [];
  msg = 'Please wait while we scan the web for you!';
  title = 'flare-example';
  playPosition = 0;
  playing = true;
  animation = 'happy';
  showing = false;
  isFalse = 0;
  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this.queryService.errEvent.subscribe(
      _ => {
        this.netErr = true;
      }
    );
    this.queryService.queryingEvent.subscribe(
      res => {
        this.showing = true;
        this.loading = true;
        this.netErr = false;
        setTimeout(() => {
          this.msg = 'This can take sometime. Please be patient!';
        }, 10000);
        setTimeout(() => {
          this.msg = 'You can scroll down and look at some myth busters while we are fetching results';
        }, 25000);
        setTimeout(() => {
          this.msg = 'Results are usually fetched in 60 seconds or less';
        }, 40000);
      }
    );
    this.queryService.queryEvent.subscribe(
      (res: any) => {
        this.msg = 'Please wait while we scan the web for you!';
        if ( +res.t_value >= 0.95 ) {
          this.isFalse = 1;
        } else if (+res.t_value < 0.95 && +res.t_value >= 0.35) {
          this.isFalse = 2;
        } else {
          this.isFalse = 0;
        }
        this.results = [];
        this.relevantQuery = true;
        this.loading = false;
        for (const i in res.scores) {
          if (res.scores[i] > 0.94 && !this.strs.includes(res.exp[i])) {
            this.strs.push(res.exp[i]);
            this.results.push({
              score: res.scores[i], exp: res.exp[i], link: res.link[i]
            });
          }
        }
        if (this.results.length === 0) {
          this.relevantQuery = false;
          // tslint:disable-next-line: forin
          for (const i in res.scores) {
            this.results.push({
              score: res.scores[i], exp: res.exp[i], link: res.link[i]
            });
          }
        }
      }
    );
  }

}
