import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Rissala, id_user, item } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PostRissalaService {
  

  constructor(private apiService:ApiService) { }
  getProducts=(url:string ):Observable<Rissala>=> {
    return this.apiService.get(url,{responseType:'json',});
 
  }
  addRissala=(url:string ):Observable<any>=> {
    return this.apiService.post(url,{responseType:'json'})};
  
  editRissala= (url: string): Observable<string> => {
    return this.apiService.put(url,{responseType:'json'})};

  
  deleteRissala=(url:string):Observable<string>=> {
      return this.apiService.delete(url,{responseType:'json'});
  };
  getSearch=(url:string ):Observable<String>=> {
    return this.apiService.get(url,{responseType:'json',});
 
  }
  getRissalaByID=(url:string ):Observable<item>=> {
    return this.apiService.get(url,{responseType:'json',});
 
}}
