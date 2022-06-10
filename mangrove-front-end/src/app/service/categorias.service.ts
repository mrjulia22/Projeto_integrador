import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient
  ) { }


  tokenUsuario = {
    headers: new HttpHeaders().set('Authorization',environment.tokenUsuario)
  }
 
  getAllCategorias(): Observable<CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>('https://mangroveprojeto.herokuapp.com/categorias/all', this.tokenUsuario)
  }

  getByIdCategorias(id: number): Observable<CategoriaModel>{
    return this.http.get<CategoriaModel>(`https://mangroveprojeto.herokuapp.com/categorias/${id}`, this.tokenUsuario)
  }

  postCategorias(categoria: CategoriaModel): Observable<CategoriaModel>{
    return this.http.post<CategoriaModel>('https://mangroveprojeto.herokuapp.com/categorias/cadastrar', categoria, this.tokenUsuario)
  }

  putCategorias(categoria: CategoriaModel): Observable<CategoriaModel>{
    return this.http.put<CategoriaModel>('https://mangroveprojeto.herokuapp.com/categorias/atualizar', categoria, this.tokenUsuario)
  }

  deleteCatagorias(id: number){
    return this.http.delete(`https://mangroveprojeto.herokuapp.com/categorias/${id}`, this.tokenUsuario)
  }

}


