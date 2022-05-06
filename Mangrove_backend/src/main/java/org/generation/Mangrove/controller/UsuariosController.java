package org.generation.Mangrove.controller;

import java.util.List;

import javax.validation.Valid;

import org.generation.Mangrove.model.UsuariosModel;
import org.generation.Mangrove.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping ("/Usuarios")
@CrossOrigin ( origins = " * ", allowedHeaders = " * ")
public class UsuariosController {

	@Autowired
	private UsuariosRepository usuariosRepository;
	
	@GetMapping
	public ResponseEntity<List<UsuariosModel>> getAll(){
		return ResponseEntity.ok(usuariosRepository.findAll());
	}
	
	@GetMapping ("/{id}")
	public ResponseEntity<UsuariosModel> getById (@PathVariable Long id) {
		return usuariosRepository.findById(id) .map(resp->ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build()) ;
	}
	
	@GetMapping ("/nome/{nome}")
	public ResponseEntity<List<UsuariosModel>> getByName (@PathVariable String nome){
		return ResponseEntity.ok(usuariosRepository.findAllByNomeUsuarioContainingIgnoreCase(nome));
	}
	  
	@PostMapping
	public ResponseEntity<UsuariosModel> post(@Valid @RequestBody UsuariosModel usuariosModel) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuariosRepository.save(usuariosModel));
	}

	@PutMapping
	public ResponseEntity<UsuariosModel> put(@Valid @RequestBody UsuariosModel usuariosModel) {
		return usuariosRepository.findById(usuariosModel.getId())
				.map(resposta -> ResponseEntity.status(HttpStatus.CREATED).body(usuariosRepository.save(usuariosModel)))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}

	
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		java.util.Optional<UsuariosModel> usuariosModel = usuariosRepository.findById(id);

		if (usuariosModel.isEmpty())
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);

		usuariosRepository.deleteById(id);
	}

	
	
	
}
