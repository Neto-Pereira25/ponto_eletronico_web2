package br.edu.ifpe.discente.joseneto.pontoEletronico.controllers.employee;

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

import br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities.Employee;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories.EmployeeRepository;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    EmployeeRepository employeeRepository = new EmployeeRepository();

    @PostMapping
    public ResponseEntity<Employee> insert(@RequestBody Employee emp) {
        try {
            emp = employeeRepository.create(emp);
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Falha ao cadastrar funcionário");
        }

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(emp.getId())
                .toUri();

        return ResponseEntity.created(uri).body(emp);
    }

    // public ResponseEntity<Employee> update() {
    // }

    // public ResponseEntity<Employee> findById() {
    // }

    // public ResponseEntity<Employee> findAll() {
    // }

    // public ResponseEntity<Employee> Delete() {
    // }
}
