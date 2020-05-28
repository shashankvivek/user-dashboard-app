import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserResponse, IUserListResponse } from './models/users.response.model';

@Injectable({
  providedIn: 'root',
})
export class UserSvcService {
  constructor(private http: HttpClient) {}

  getUserList(pageNumber: number): Observable<IUserListResponse> {
    return this.http.get<IUserListResponse>(`https://reqres.in/api/users?page=${pageNumber}`);
  }

  getUserDetail(id: number): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`https://reqres.in/api/users/${id}`);
  }
}
