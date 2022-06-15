import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutosModel } from '../model/ProdutosModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  listaCategorias: CategoriaModel[];
  listaProdutos: ProdutosModel[];
  produto: ProdutosModel;
  idProd: number

  constructor(
    public auth: AuthService,
    private produt: ProdutosService,
    private categoria: CategoriasService,
    private router: Router,
  
  ) { }

  ngOnInit() {
    
    window.scroll(0, 0);

    this.getAllCategorias();
    this.getAllProdutos();

  }

  getAllCategorias() {
    this.categoria.getAllCategorias().subscribe((resp: CategoriaModel[]) => {
      this.listaCategorias = resp;
      
    });
  }

  getAllProdutos() {
    this.produt.getAllProdutos().subscribe((resp: ProdutosModel[]) => {
      this.listaProdutos = resp;
    
    });
  }

  getProdById(id: number){
    this.produt.getByIdProdutos(id).subscribe((resp: ProdutosModel) =>{
      this.produto = resp;
      // this.desconto();
      // this.parcela();
    })
  }
  
}