import { HttpContext, HttpHeaders, HttpParams } from  '@angular/common/http'

export interface Options{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}
export interface item{
    id:number;
    title:string;
    post_img:string;
    user_id:number;  
    content:string;
    style:string;
    category:string;
    keywords:string[]
}
export type Rissala = item[];


export interface id_user{
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    id_user:number;
}
export interface id{
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    id:number;
}
export interface creator{
    username:string;
    user_img?:string;
    readings:number;
    user_id:number;
    }

export interface keywordObj{
        id:number;
        keyword:string;
        }