import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Result } from '../classes/result';
import { Cube } from '../classes/cube'

@Injectable({
  providedIn: 'root'
})

export class ServiceCubesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiRestUrl = 'http://localhost:2525/cubes';

  constructor(private http: HttpClient) { }

  getCubes(): Observable<Cube[]> {
    return this.http.get<Cube[]>(this.apiRestUrl)
      .pipe(
        tap(_ => console.log('get Cubes')),
        catchError(this.handleError<Cube[]>('getCubes', []))
      );
  }

  getCube(id: number): Observable<Cube> {
    return this.http.get<Cube>(this.apiRestUrl + "/" + id)
      .pipe(
        tap(_ => console.log('get Cube')),
        catchError(this.handleError<Cube>('getCube', new Cube()))
      );
  }

  addCube(cube: Cube): Observable<Result> {
    return this.http.post<Result>(this.apiRestUrl, cube, this.httpOptions)
      .pipe(
        tap(_ => console.log('add Cube')),
        catchError(this.handleError<Result>('addCube', { status: 'failure' }))
      );
  }
  
  editCube(cube: Cube): Observable<Result> {
    return this.http.put<Result>(this.apiRestUrl, cube, this.httpOptions)
      .pipe(
        tap(_ => console.log('edit Cube')),
        catchError(this.handleError<Result>('editCube', { status: 'failure' }))
      );
  }

  removeCube(id: number): Observable<Result> {
    return this.http.delete<Result>(this.apiRestUrl + "/" + id)
      .pipe(
        tap(_ => console.log('remove Cube')),
        catchError(this.handleError<Result>('removeCube', { status: 'failure' }))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
