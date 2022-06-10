import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutosModel } from '../model/ProdutosModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http: HttpClient
  ) { }

  tokenUsuario = {
    headers: new HttpHeaders().set('Authorization',environment.tokenUsuario)
  }
  getAllProdutos(): Observable<ProdutosModel[]>{
    return this.http.get<ProdutosModel[]>('https://mangroveprojeto.herokuapp.com/produtos/all', this.tokenUsuario)
  }

  getByIdProdutos(id: number): Observable<ProdutosModel>{
    return this.http.get<ProdutosModel>(`https://mangroveprojeto.herokuapp.com/produtos/${id}`, this.tokenUsuario)
  }

  postProdutos(produto: ProdutosModel): Observable<ProdutosModel>{
    return this.http.post<ProdutosModel>('https://mangroveprojeto.herokuapp.com/produtos/cadastrar', produto, this.tokenUsuario)
  }

  putProdutos(produto: ProdutosModel): Observable<ProdutosModel>{
    return this.http.put<ProdutosModel>('https://mangroveprojeto.herokuapp.com/produtos/atualizar', produto, this.tokenUsuario)
  }

  deleteProdutos(id: number){
    return this.http.delete(`https://mangroveprojeto.herokuapp.com/produtos/${id}`, this.tokenUsuario)
  }
}
