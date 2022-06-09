import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutosModel } from '../model/ProdutosModel';
import { UsuariosModel } from '../model/UsuariosModel';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produto: ProdutosModel = new ProdutosModel()
  listaProdutos: ProdutosModel[]
  usuario: UsuariosModel = new UsuariosModel()
  idUsuario = environment.id
  categoria: CategoriaModel = new CategoriaModel()
  listaCategorias: CategoriaModel[]
  idCategoria: number
  
  constructor(
    private router: Router,
    private produtoService: ProdutosService
  ) { }

  ngOnInit() {
    if(environment.tokenUsuario == ""){
      //alert("Sessão encerrada! Faça login novamente.")
      this.router.navigate(["/entrar"])
    }
  }

}
