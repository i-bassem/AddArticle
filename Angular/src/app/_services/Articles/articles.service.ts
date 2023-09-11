import { HttpClient ,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError} from 'rxjs';
import { IArticle } from 'src/app/_models/IArticle';
import { environment } from 'src/environments/environment.development';

;

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  //HTTP options sent in post/put/delete header Request
  httpOption;

  constructor(private httpClient: HttpClient) {
    
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization : localStorage.getItem("token")!
      }),
    };
  }

  //#region Function for handling errors
  //Function for handling errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  //#endregion

  //http://localhost:3000/api/articles/
  getAllArticles(): Observable<IArticle[]> {

    return this.httpClient.get<IArticle[]>(`${environment.APIURL}/api/articles/`, this.httpOption);
  }


  //ADDING NEW Article
   //http://localhost:3000/api/articles/
  addArticle(newArticle: IArticle): Observable<IArticle> {

    return this.httpClient.post<IArticle>( `${environment.APIURL}/api/articles/`, JSON.stringify(newArticle), this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // http://localhost:3000/login
  login(){

    return this.httpClient.post(`${environment.APIURL}/login`, this.httpOption).pipe(
    
        // localStorage.setItem('token', res.token)
      
    )
  }





}
