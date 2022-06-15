import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { ProdutosModel } from 'src/app/model/ProdutosModel';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-buscar-produtos',
  templateUrl: './buscar-produtos.component.html',
  styleUrls: ['./buscar-produtos.component.css']
})
export class BuscarProdutosComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listaCategorias: CategoriaModel[]

  produto: ProdutosModel = new ProdutosModel()
  listaProdutos: ProdutosModel[]
  nomeProduto: string
  nomeCategoria: string

  constructor(
    private produtosService: ProdutosService,
    private categoriasService: CategoriasService,
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.tokenUsuario == ""){
      //alert("Sessão encerrada! Faça login novamente.")
      this.router.navigate(["/entrar"])
    }
    this.findAllProdutos()
  }

  categoriaSelecionada(event: any){
    this.categoria = event.target.value
  }
  
  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: ProdutosModel[])=>{
      this.listaProdutos = resp
    })
  }

  findAllCategorias(){
    this.categoriasService.getAllCategorias().subscribe((resp: CategoriaModel[])=>{
      this.listaCategorias = resp
    })
  }
  
  findByNomeCategoria(){
    if(this.nomeCategoria ==''){
      this.findAllCategorias()
    } else{
      this.categoriasService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: CategoriaModel[]) =>{
        this.listaCategorias=resp
      })
    }
  }

  findByNomeProduto(){

    if(this.nomeProduto ==''){
      this.findAllProdutos()
    } else{
      this.produtosService.getByNomeProduto(this.nomeProduto).subscribe((resp: ProdutosModel[]) => {
        this.listaProdutos = resp
      })
    }  
  }  

}
