import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clan } from './model/clan.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ClansService {
  constructor(private httpc: HttpClient) {}

  public httpOptions = {
      headers: new HttpHeaders({
        // tslint:disable-next-line:max-line-length
        'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc2MywiaWRlbiI6IjQ5NTYwMzg4Njc0NTE5MDQzMiIsIm1kIjp7fSwidHMiOjE1MzgyMzMxMjAxMzl9.Gf5Sz8rWWf8wcesDsTum-iKaGOK-w38zByqZaIeo3Bk',
        'Content-Type':  'application/json'
      })
  };

  public getClanPorNome(termo: string): Observable<Clan[]> {
    return this.httpc.get<Clan[]>(`https://api.royaleapi.com/clan/search?name=${termo}`, this.httpOptions);
  }

  public getClanPorTag(tag: string): Observable<Clan[]> {
    return this.httpc.get<Clan[]>(`https://api.royaleapi.com/clan/${tag}`, this.httpOptions);
  }
}

