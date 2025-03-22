package br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories;

import java.sql.SQLException;
import java.util.List;

public interface GenericRepository<T, I> {

    public T create(T t) throws SQLException;

    public T update(T t) throws SQLException;

    public T find(I key) throws SQLException;

    public List<T> findAll() throws SQLException;

    public T delete(I key) throws SQLException;
}
