package br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities;

import java.time.LocalDateTime;

public class TimeRegister {

    private Integer id;
    private Integer employeeId;
    private LocalDateTime dateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

}
