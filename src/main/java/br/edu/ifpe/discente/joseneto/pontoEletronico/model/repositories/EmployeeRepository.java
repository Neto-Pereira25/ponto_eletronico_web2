package br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import br.edu.ifpe.discente.joseneto.pontoEletronico.model.db.DBException;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.db.Database;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities.Employee;

public class EmployeeRepository implements GenericRepository<Employee, Integer> {

    protected EmployeeRepository() {
    }

    @Override
    public Employee create(Employee emp) throws SQLException {
        String query = """
                INSERT INTO funcionario
                    (nome, cargo, departamento, email, senha)
                VALUES
                    (?,?,?,?,?)
                """;

        PreparedStatement pstm = null;
        try {
            pstm = Database.getConnection().prepareStatement(query);

            pstm.setString(1, emp.getName());
            pstm.setString(2, emp.getPosition());
            pstm.setString(3, emp.getDepartment());
            pstm.setString(4, emp.getEmail());
            pstm.setString(5, emp.getPassword());

            pstm.execute();

            return emp;
        } catch (SQLException e) {
            throw new DBException(e.getMessage());
        }
    }

    @Override
    public Employee update(Employee t) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public Employee find(Integer key) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'find'");
    }

    @Override
    public List<Employee> findAll() throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public Employee delete(Integer key) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    public static void main(String[] args) {

        Employee e1 = new Employee();
        e1.setName("Ana Souza");
        e1.setPosition("Analista de TI");
        e1.setDepartment("Tecnologia");
        e1.setEmail("ana.souza@email.com");
        e1.setPassword("123456");

        Employee e2 = new Employee();
        e2.setName("Carlos Lima");
        e2.setPosition("Gerente de RH");
        e2.setDepartment("Recursos Humanos");
        e2.setEmail("carlos.lima@email.com");
        e2.setPassword("123456");

        Employee e3 = new Employee();
        e3.setName("Fernanda Oliveira");
        e3.setPosition("Desenvolvedora");
        e3.setDepartment("Tecnologia");
        e3.setEmail("fernanda.oliveira@email.com");
        e3.setPassword("123456");

        Employee e4 = new Employee();
        e4.setName("José Santos");
        e4.setPosition("Contador");
        e4.setDepartment("Financeiro");
        e4.setEmail("jose.santos@email.com");
        e4.setPassword("123456");

        Employee e5 = new Employee();
        e5.setName("Mariana Ribeiro");
        e5.setPosition("Secretária");
        e5.setDepartment("Administração");
        e5.setEmail("mariana.ribeiro@email.com");
        e5.setPassword("123456");

        EmployeeRepository e = new EmployeeRepository();

        try {
            e.create(e1);
            e.create(e2);
            e.create(e3);
            e.create(e4);
            e.create(e5);
            System.out.println("Funcionou");
        } catch (SQLException e6) {
            System.out.println("Não Funcionou");
            e6.printStackTrace();
        }
    }

}
