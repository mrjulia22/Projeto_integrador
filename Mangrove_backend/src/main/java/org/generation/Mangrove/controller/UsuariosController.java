package org.generation.Mangrove.controller;

import java.util.List;
import org.generation.Mangrove.model.UsuariosModel;
import org.generation.Mangrove.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/usuarios")
@CrossOrigin ( origins = " * ", allowedHeaders = " * ")
public class UsuariosController {

	@Autowired
	private UsuariosRepository usuariosRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<UsuariosModel>> getAll(){
		return ResponseEntity.ok(usuariosRepository.findAll());
	}
	
	@GetMapping ("/{id}")
	public ResponseEntity<UsuariosModel> getById (@PathVariable Long id) {
		return usuariosRepository.findById(id) .map(resp->ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build()) ;	
	}
}
