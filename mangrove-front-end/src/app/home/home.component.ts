import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutosModel } from '../model/ProdutosModel';
import { UsuariosModel } from '../model/UsuariosModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
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
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.tokenUsuario == ""){
      //alert("Sessão encerrada! Faça login novamente.")
      this.router.navigate(["/entrar"])
    }
    this.findAllCategorias()
    this.findAllProdutos()
    //this.authService.refreshToken() 
}

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: CategoriaModel[])=>{
      this.listaCategorias = resp
    })
  }

  findByIdCategorias(){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: CategoriaModel)=>{
      this.categoria = resp
    }) 
}

findAllProdutos(){
  this.produtoService.getAllProdutos().subscribe((resp: ProdutosModel[])=>{
    this.listaProdutos = resp
  })
}

publicar(){
  this.categoria.id = this.idCategoria
  this.produto.categoria = this.categoria

  this.usuario.id = this.idUsuario
  this.produto.usuario = this.usuario

  this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutosModel)=>{
    this.produto = resp
    alert('Produto cadastrado com sucesso!')
    this.produto = new ProdutosModel()
    this.findAllProdutos()
  })
}

}
