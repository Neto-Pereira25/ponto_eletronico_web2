package br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities;

public class Employee {

    private int id; // identificador
    private String name; // nome
    private String position; // cargo
    private String department; // departamento
    private String email;
    private String password; // senha

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", position=" + position + ", department=" + department
                + ", email=" + email + ", password=" + password + "]";
    }

}
