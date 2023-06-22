import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {ShortlinkInterface} from "../interfaces/shortlink.interface";

@Injectable({
  providedIn: 'root'
})
export class ShorterLinksService {

  private baseUrl: string = ' https://api.shrtco.de/v2/shorten';
  constructor(private http: HttpClient) { }

  getShorterLink(link: string): Observable<ShortlinkInterface> {
    const url: string = `${this.baseUrl}?url=${link}`;
    return this.http.get<ShortlinkInterface>(url);
  }
}
