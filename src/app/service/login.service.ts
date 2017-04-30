import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  
  private _Headers = new Headers();
  private options = new RequestOptions({ headers: this._Headers, method: 'POST' });

  private _urlOverride = "http://127.0.0.1:5000/api/login"
  private _url = this._urlOverride;

  private extractData(res: Response) {
    
    let body = res.json();
    return body.data || {};
  }
  private handleErrorPromise(error: Response | any) {
    //console.error(error._body || error);
    //return Promise.reject(error._body || error);
    return {Status:"error"};
  }
  constructor(private _http: Http) { }
  get(_data) {
    this._Headers.append('Content-Type', 'application/json');
    //let options = new RequestOptions({ headers: this._Headers });
    console.log(this._url);
    return this._http.post(this._url,_data,this.options).map((response: Response) => response.json());

  }


}
