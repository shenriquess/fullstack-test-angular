import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  public getHoras(): Observable<any> {
    return this.http.get(environment.apiHost + '/horas');
  }

  public adicionarTexto(valor): Observable<any> {
    var texto = valor;
    return this.http.post(environment.apiHost + '/input', { texto: texto});
    //restante do código sem alterações
  }
}
