import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutosModel } from '../model/ProdutosModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: ProdutosModel = new ProdutosModel()
  listaProdutos: ProdutosModel[]
  idProduto: number
  categoria: CategoriaModel = new CategoriaModel()
  idCategoria: number
  listaCategorias: CategoriaModel[]

  constructor(
    private authService: AuthService,
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    
    this.getProdutoById(this.idProduto);
  }

  getProdutoById(id: number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: ProdutosModel) =>{
      this.produto = resp;
    })
  }


}
