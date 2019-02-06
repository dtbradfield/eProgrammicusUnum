import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStarred } from './starred-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarredConfigService {

  
  private configUrl: string = "https://api.github.com/users/dtbradfield/starred";

  constructor(private http: HttpClient) { }

  getConfig(): Observable<IStarred[]>{
    return this.http.get<IStarred[]>(this.configUrl);
  }
}
