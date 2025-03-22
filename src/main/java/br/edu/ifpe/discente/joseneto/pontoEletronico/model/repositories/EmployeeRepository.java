package br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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
        } finally {
            Database.closeStatement(pstm);
        }
    }

    @Override
    public Employee update(Employee emp) throws SQLException {
        String query = """
                UPDATE funcionario
                SET
                    nome = ?,
                    cargo = ?,
                    departamento = ?,
                    email = ?,
                    senha = ?
                WHERE
                    id = ?
                """;

        PreparedStatement pstm = null;

        try {
            pstm = Database.getConnection().prepareStatement(query);

            pstm.setString(1, emp.getName());
            pstm.setString(2, emp.getPosition());
            pstm.setString(3, emp.getDepartment());
            pstm.setString(4, emp.getEmail());
            pstm.setString(5, emp.getPassword());
            pstm.setInt(6, emp.getId());

            pstm.executeUpdate();

            System.out.println("\n" + emp + "\n");

            return emp;
        } catch (SQLException e) {
            throw new DBException(e.getMessage());
        } finally {
            Database.closeStatement(pstm);
        }
    }

    @Override
    public Employee find(Integer key) throws SQLException {
        String query = """
                SELECT *
                FROM funcionario
                WHERE id = ?
                """;

        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            pstm = Database.getConnection().prepareStatement(query);
            pstm.setInt(1, key);

            rs = pstm.executeQuery();

            if (rs.next()) {
                return instantiatedUser(rs);
            }

            return null;
        } catch (SQLException e) {
            throw new DBException(e.getMessage());
        } finally {
            Database.closeResultSet(rs);
            Database.closeStatement(pstm);
        }
    }

    @Override
    public List<Employee> findAll() throws SQLException {
        String query = """
                SELECT * FROM funcionario
                """;

        PreparedStatement pstm = null;
        ResultSet rs = null;

        try {
            pstm = Database.getConnection().prepareStatement(query);
            rs = pstm.executeQuery();

            List<Employee> employees = new ArrayList<>();

            while (rs.next()) {
                Employee emp = instantiatedUser(rs);
                employees.add(emp);
            }

            return employees;
        } catch (Exception e) {
            throw new DBException(e.getMessage());
        } finally {
            Database.closeResultSet(rs);
            Database.closeStatement(pstm);
        }
    }

    @Override
    public void delete(Integer key) throws SQLException {
        String query = """
                DELETE FROM funcionario
                WHERE id = ?
                """;
        PreparedStatement pstm = null;

        try {
            pstm = Database.getConnection().prepareStatement(query);
            pstm.setInt(1, key);
            pstm.execute();
        } catch (Exception e) {
            throw new DBException(e.getMessage());
        } finally {
            Database.closeStatement(pstm);
        }
    }

    private Employee instantiatedUser(ResultSet rs) {
        Employee emp = new Employee();
        try {
            emp.setId(rs.getInt("id"));
            emp.setName(rs.getString("nome"));
            emp.setPosition(rs.getString("cargo"));
            emp.setDepartment(rs.getString("departamento"));
            emp.setEmail(rs.getString("email"));
            emp.setPassword(rs.getString("senha"));
        } catch (SQLException e) {
            throw new DBException(e.getMessage());
        }
        return emp;
    }

    // public static void main(String[] args) {

    // Employee e1 = new Employee();
    // e1.setId(1);
    // e1.setName("Ana Souza");
    // e1.setPosition("Analista de TI");
    // e1.setDepartment("Tecnologia");
    // e1.setEmail("ana.souza@email.com");
    // e1.setPassword("123456");

    // Employee e2 = new Employee();
    // e2.setId(2);
    // e2.setName("Carlos Lima");
    // e2.setPosition("Gerente de RH");
    // e2.setDepartment("Recursos Humanos");
    // e2.setEmail("carlos.lima@email.com");
    // e2.setPassword("123456");

    // Employee e3 = new Employee();
    // e3.setId(3);
    // e3.setName("Fernanda Oliveira");
    // e3.setPosition("Desenvolvedora");
    // e3.setDepartment("Tecnologia");
    // e3.setEmail("fernanda.oliveira@email.com");
    // e3.setPassword("123456");

    // Employee e4 = new Employee();
    // e4.setId(4);
    // e4.setName("José Santos");
    // e4.setPosition("Contador");
    // e4.setDepartment("Financeiro");
    // e4.setEmail("jose.santos@email.com");
    // e4.setPassword("123456");

    // Employee e5 = new Employee();
    // e5.setId(5);
    // e5.setName("Mariana Ribeiro");
    // e5.setPosition("Secretária");
    // e5.setDepartment("Administração");
    // e5.setEmail("mariana.ribeiro@email.com");
    // e5.setPassword("123456");

    // EmployeeRepository e = new EmployeeRepository();

    // try {
    // // e.update(e1);
    // // e.update(e2);
    // // e.update(e3);
    // // e.update(e4);
    // // e.update(e5);
    // // List<Employee> emps = e.findAll();

    // // for (Employee emp : emps) {
    // // System.out.println(emp);
    // // }

    // e.delete(2);

    // System.out.println("Funcionou");
    // } catch (SQLException e6) {
    // System.out.println("Não Funcionou");
    // e6.printStackTrace();
    // }
    // }

}
