import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = "http://localhost:8000/api/auth";

  constructor(private httpClient: HttpClient) { }

  register(formValue:any){
    return firstValueFrom(this.httpClient.post<any>(`${this.baseURL}/register`, formValue));
  }

  login(formValue:any){
    return firstValueFrom(this.httpClient.post<any>(`${this.baseURL}/login`, formValue, {withCredentials: true}));
  }

  logout(){
    return this.httpClient.post<any>(`${this.baseURL}/logout`,{}, {withCredentials: true});
  }

  isAuth(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}/is-logged`, {withCredentials: true}).pipe(
      map(response => response),
      catchError(error => of(false)) // Si hay error, devuelve false
    );
  }

}
