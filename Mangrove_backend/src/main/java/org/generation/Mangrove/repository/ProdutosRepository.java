package org.generation.Mangrove.repository;

import java.util.List;

import org.generation.Mangrove.model.ProdutosModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface ProdutosRepository extends JpaRepository<ProdutosModel, Long> {
	public List <ProdutosModel> findAllByNomeProdutoContainingIgnoreCase(@Param("nomeProduto") String nomeProduto);

}
