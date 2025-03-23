package br.edu.ifpe.discente.joseneto.pontoEletronico.controllers.employee;

import java.net.URI;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities.Employee;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories.EmployeeRepository;

@CrossOrigin(origins = "http://127.0.0.1:5500", methods = { RequestMethod.GET, RequestMethod.POST,
        RequestMethod.OPTIONS })
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    EmployeeRepository employeeRepository = new EmployeeRepository();
    private final BCryptPasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @PostMapping
    public ResponseEntity<Employee> insert(@RequestBody Employee emp) {
        try {
            emp.setPassword(PASSWORD_ENCODER.encode(emp.getPassword()));
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

    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable int id, @RequestBody Employee emp) {
        try {
            if (employeeRepository.find(id) == null) {
                return ResponseEntity.notFound().build();
            }
            emp.setId(id);
            employeeRepository.update(emp);

            return ResponseEntity.ok().body(emp);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Falha ao atualizar funcionário");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById(@PathVariable int id) {
        try {
            Employee emp = employeeRepository.find(id);

            if (emp == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok().body(emp);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Falha ao encontrar funcionário");
        }
    }

    @GetMapping
    public ResponseEntity<List<Employee>> findAll() {
        try {
            List<Employee> employees = employeeRepository.findAll();

            return ResponseEntity.ok().body(employees);
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Falha ao encontrar todos os funcionários");
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> Delete(@PathVariable int id) {
        try {
            employeeRepository.delete(id);
            return ResponseEntity.noContent().build();
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Falha ao deletar funcionários");
        }
    }

    @PostMapping("/registeruser")
    public ResponseEntity<Employee> registerUser(@RequestBody Employee emp) {
        try {
            emp.setPosition("Porteiro");
            emp.setDepartment("Portaria");
            emp.setPassword(PASSWORD_ENCODER.encode(emp.getPassword()));
            emp = employeeRepository.create(emp);

            URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(emp.getId())
                    .toUri();

            return ResponseEntity.created(uri).body(emp);
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Falha ao registrar usuário");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Employee> login(@RequestBody Map<String, String> loginData) {

        String email = loginData.get("email");
        String password = loginData.get("password");

        if (email.isEmpty() || password.isEmpty() || email == null || password == null) {
            return new ResponseEntity<Employee>(HttpStatus.BAD_REQUEST);
        }

        try {
            Employee emp = employeeRepository.findByEmail(email);

            if (emp == null) {
                return ResponseEntity.notFound().build();
            }

            if (!PASSWORD_ENCODER.matches(password, emp.getPassword())) {
                return new ResponseEntity<Employee>(HttpStatus.BAD_REQUEST);
            }

            return ResponseEntity.ok().body(emp);

        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Falha ao fazer o login");
        }
    }
}
