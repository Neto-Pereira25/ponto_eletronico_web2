package br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.edu.ifpe.discente.joseneto.pontoEletronico.model.db.DBException;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.db.Database;
import br.edu.ifpe.discente.joseneto.pontoEletronico.model.entities.TimeRegister;

public class TimeRegisterRepository implements GenericRepository<TimeRegister, Integer> {

    @Override
    public TimeRegister create(TimeRegister t) throws SQLException {
        String query = """
                INSERT INTO registroponto
                    (funcionario_id, data_hora)
                VALUES
                    (?,?)
                """;
        PreparedStatement pstm = null;

        try {
            pstm = Database.getConnection().prepareStatement(query);

            pstm.setInt(1, t.getEmployeeId());

            Timestamp timestamp = Timestamp.valueOf(t.getDateTime());

            pstm.setTimestamp(2, timestamp);

            pstm.execute();

            return t;
        } catch (SQLException e) {
            throw new DBException(e.getMessage());
        }
    }

    @Override
    public TimeRegister update(TimeRegister t) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public TimeRegister find(Integer key) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'find'");
    }

    @Override
    public List<TimeRegister> findAll() throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public void delete(Integer key) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    public static void main(String[] args) {
        TimeRegisterRepository trr = new TimeRegisterRepository();

        TimeRegister tr = new TimeRegister();

        tr.setEmployeeId(4);
        tr.setDateTime(LocalDateTime.now());

        try {
            trr.create(tr);
            System.out.println("Funcionou");
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
