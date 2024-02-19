import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {
  }

  private getStandardOption() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',
      })
    };
  }

  getWishes(){
    let options = this.getStandardOption();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse ) : any {
    if(error.status === 0){
      console.error('There is an issue on client or network', error.error);
    }
    else {
      console.error('There is a problem on server side', error.error);
    }
    return throwError( () => new Error('Cannot retrieve wishes from a server'));
  }

  private addWish(wish : wishItem){
    let options = this.getStandardOption();

    options.headers = options.headers.set('Autorization', 'value-need-for-autorization');

    this.http.post('assets/wishes.json', wish, options);
  }

  
   
  
}
