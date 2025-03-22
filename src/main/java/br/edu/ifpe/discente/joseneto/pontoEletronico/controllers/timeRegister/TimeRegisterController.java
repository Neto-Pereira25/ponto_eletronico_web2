package br.edu.ifpe.discente.joseneto.pontoEletronico.controllers.timeRegister;

import java.net.URI;
import java.sql.SQLException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities.Employee;
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

    @PutMapping("/{id}")
    public ResponseEntity<TimeRegister> update(@PathVariable int id, @RequestBody TimeRegister tr) {
        try {
            if (trr.find(id) == null) {
                return ResponseEntity.notFound().build();
            }

            tr.setId(id);
            trr.update(tr);

            return ResponseEntity.ok().body(tr);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Falha ao atualizar registro do ponto");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<TimeRegister> find(@PathVariable int id) {
        try {
            TimeRegister tr = trr.find(id);

            if (tr == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok().body(tr);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Falha ao encontrar registro do ponto");
        }
    }

}
