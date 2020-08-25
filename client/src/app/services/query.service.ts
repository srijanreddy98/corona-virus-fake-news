import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  // tslint:disable-next-line: variable-name
  private _queryEvent: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line: variable-name
  private _queringEvent: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line: variable-name
  private _errEvent: EventEmitter<any> = new EventEmitter<any>();
  get queryEvent() {
    return this._queryEvent;
  }
  get queryingEvent() {
    return this._queringEvent;
  }
  get errEvent() {
    return this._errEvent;
  }
  constructor(private http: HttpClient) { }

  queryResults(query, acc) {
    this._queringEvent.emit();
    this.http.post('/api/query', {query, acc}).toPromise().then(
      res => this._queryEvent.emit(res),
      err => this._errEvent.emit()
    );
  }

}
