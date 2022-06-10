import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { CategoriasService } from 'src/app/service/categorias.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  idCategoria: number

  constructor(
    private router: Router,
    private categoriasService: CategoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.tokenUsuario ==''){
      this.router.navigate(['/categoria'])
    }
    this.idCategoria= this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriasService.getByIdCategorias(id).subscribe((resp: CategoriaModel)=>{
      this.categoria=resp
    })
  }

  deletar(){
    this.categoriasService.deleteCatagorias(this.idCategoria).subscribe(()=>{
      alert("Categoria apagada com sucesso!")
      this.router.navigate(['/categoria'])
    })

  }
}
