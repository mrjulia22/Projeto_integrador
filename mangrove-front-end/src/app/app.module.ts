import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [{ 
    provide: LocationStrategy,
    useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]

})
export class AppModule { }
