import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: string = "http://127.0.0.1:8000/api/user";
  private httpClient:HttpClient = inject(HttpClient);

  constructor() { }

  register(formValue:any){
    return firstValueFrom(this.httpClient.post<any>(`${this.baseURL}/register`, formValue));
    
  }
}
