import { Http , Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the TodoserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class TodoserviceProvider {

private apiUrl : string="https://5bcce576cf2e850013874767.mockapi.io/task/categories";

  constructor(public http: Http) {
  }

  getData(){
    return this.http.get(this.apiUrl).do(this.logResponse).
    map(this.extractData).catch(this.catchError);
  }

  private catchError( error : Response | any){
    console.log(error);
    return Observable.throw(error.json.error ||"server error")
  }

  private logResponse( res: Response){
    console.log(res);
  }

  private extractData( res: Response){
    return res.json
  }

}
