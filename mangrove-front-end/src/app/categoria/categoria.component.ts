import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listaCategorias: CategoriaModel[]
  



  constructor(
    private router: Router, 
    private categoriasService: CategoriasService,
    private authService: AuthService) { 

    }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.tokenUsuario == ""){
      //alert("Sessão encerrada! Faça login novamente.")
      this.router.navigate(["/entrar"])    
  }   
    if(environment.tipoUsuario != "Administrador"){
      alert("Você precisa ser Administrador para acessar essa rota")
      this.router.navigate(['/home'])
    }
    this.findAllCategorias()
  
}


findAllCategorias(){
  this.categoriasService.getAllCategorias().subscribe((resp: CategoriaModel[])=>{
    this.listaCategorias=resp
  })
}

cadastrarCategoria(){
  this.categoriasService.postCategorias(this.categoria).subscribe((resp:CategoriaModel)=>{
    this.categoria=resp
    alert('Categoria cadastrada com sucesso!')
    this.findAllCategorias()
    this.categoria= new CategoriaModel()      
  })
}
}
