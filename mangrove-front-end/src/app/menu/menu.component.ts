import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeUsuario
  foto = environment.fotoUsuario

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  sair(){
    this.router.navigate(['/entrar'])
    environment.tokenUsuario = ''
    environment.nomeUsuario = ''
    environment.fotoUsuario = ''
    environment.id = 0
  
  }
}
