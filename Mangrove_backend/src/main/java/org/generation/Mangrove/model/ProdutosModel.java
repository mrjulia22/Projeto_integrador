package org.generation.Mangrove.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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

}
