import { Injectable } from '@angular/core';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TrackerService {

  constructor(private http: Http) {
  }

  pollList():Observable<any>{
      let url = 'api/carparks';
      let pollingSubject = new Subject<any>();
    
      //Ever 2 seconds send a request to the server for changes
      setInterval(()=>{
        this.http.get(url)
        .map(res => res.text() ? res.json() : {}).subscribe(data => {
          pollingSubject.next(data);
        });
      },2000);

      return pollingSubject;

  }

}
