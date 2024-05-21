import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { id_user,creator } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private apiService:ApiService) { }
  getUser=(url:string):Observable<creator>=> {
    return this.apiService.get(url,{responseType:'json',});
  }
}



