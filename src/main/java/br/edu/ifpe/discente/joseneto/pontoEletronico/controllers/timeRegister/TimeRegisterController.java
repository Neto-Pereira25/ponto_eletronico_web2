package br.edu.ifpe.discente.joseneto.pontoEletronico.controllers.timeRegister;

import java.net.URI;
import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities.TimeRegister;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories.TimeRegisterRepository;

@RestController
@RequestMapping("/timeregister")
public class TimeRegisterController {

    TimeRegisterRepository trr = new TimeRegisterRepository();

    @PostMapping
    public ResponseEntity<TimeRegister> insert(@RequestBody TimeRegister tr) {
        try {
            tr = trr.create(tr);
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Falha ao cadastrar o registro do ponto");
        }

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(tr.getId())
                .toUri();
        return ResponseEntity.created(uri).body(tr);
    }

    // public ResponseEntity<TimeRegister> update() {
    // }

    // public ResponseEntity<TimeRegister> find() {
    // }

    // public ResponseEntity<List<TimeRegister>> findAll() {
    // }

    // public ResponseEntity<Void> delete() {
    // }
}
