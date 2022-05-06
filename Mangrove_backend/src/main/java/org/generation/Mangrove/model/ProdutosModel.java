package org.generation.Mangrove.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name= "tb_produtos")
public class ProdutosModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message= "Esse campo é obrigatório!")
	@Size(max=255)
	private String nomeProduto;
	
	@NotBlank(message= "Esse campo é obrigatório!")
	@Size(max=1000)
	private String descricaoProduto;
	
	@NotBlank(message= "Esse campo é obrigatório!")
	private float valorProduto;
	
	@NotBlank(message= "Esse campo é obrigatório!")
	@Size(max=1000)
	private String fotoProduto;
	
	@NotBlank(message= "Esse campo é obrigatório!")
	private int estoqueProduto;
	
	@ManyToOne
	@JoinColumn(name = "fk_categorias")
	@JsonIgnoreProperties("produtos")
	private CategoriaModel categoriaDoProduto;
	
	@ManyToOne
	@JoinColumn(name = "fk_usuarios")
	@JsonIgnoreProperties("meusProdutos")
	private UsuariosModel usuario;

	public CategoriaModel getCategoriaDoProduto() {
		return categoriaDoProduto;
	}

	public void setCategoriaDoProduto(CategoriaModel categoriaDoProduto) {
		this.categoriaDoProduto = categoriaDoProduto;
	}

	public UsuariosModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuariosModel usuario) {
		this.usuario = usuario;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeProduto() {
		return nomeProduto;
	}

	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}

	public String getDescricaoProduto() {
		return descricaoProduto;
	}

	public void setDescricaoProduto(String descricaoProduto) {
		this.descricaoProduto = descricaoProduto;
	}

	public float getValorProduto() {
		return valorProduto;
	}

	public void setValorProduto(float valorProduto) {
		this.valorProduto = valorProduto;
	}

	public String getFotoProduto() {
		return fotoProduto;
	}

	public void setFotoProduto(String fotoProduto) {
		this.fotoProduto = fotoProduto;
	}

	public int getEstoqueProduto() {
		return estoqueProduto;
	}

	public void setEstoqueProduto(int estoqueProduto) {
		this.estoqueProduto = estoqueProduto;
	}	

}
