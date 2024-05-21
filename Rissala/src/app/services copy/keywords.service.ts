import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import {  keywordObj } from '../types';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {


  constructor(private httpClient: HttpClient,private apiService: ApiService) { }

  PostKeywords = (url: string): Observable<any> => {
    return this.httpClient.post(url, { responseType: 'json' }).pipe(
      map((response: any) => {
        return JSON.stringify(response); // Stringify the JSON data
      })
    );
  };
  GetKeywords=(url:string):Observable<string>=>{
    return this.apiService.get(url,{responseType:'json'})};
   DeleteKeywords=(url:string):Observable<JSON>=>{
    return this.apiService.delete(url,{})
   }

  }
