package br.edu.ifpe.discente.joseneto.pontoEletronico.model.repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
        } finally {
            Database.closeStatement(pstm);
        }
    }

    @Override
    public TimeRegister update(TimeRegister t) throws SQLException {
        String query = """
                UPDATE registroponto
                SET
                    funcionario_id = ?,
                    data_hora = ?
                WHERE
                    id = ?
                """;
        PreparedStatement pstm = null;

        try {
            pstm = Database.getConnection().prepareStatement(query);

            pstm.setInt(1, t.getEmployeeId());

            Timestamp timestamp = Timestamp.valueOf(t.getDateTime());

            pstm.setTimestamp(2, timestamp);
            pstm.setInt(3, t.getId());
            pstm.execute();

            return t;
        } catch (SQLException e) {
            throw new DBException(e.getMessage());
        } finally {
            Database.closeStatement(pstm);
        }
    }

    @Override
    public TimeRegister find(Integer key) throws SQLException {
        String query = """
                SELECT *
                FROM registroponto
                WHERE id = ?
                """;
        PreparedStatement pstm = null;
        ResultSet rs = null;

        try {
            pstm = Database.getConnection().prepareStatement(query);
            pstm.setInt(1, key);

            rs = pstm.executeQuery();

            if (rs.next()) {
                return instantiatedTimeRegister(rs);
            }
            return null;
        } catch (Exception e) {
            throw new DBException(e.getMessage());
        } finally {
            Database.closeResultSet(rs);
            Database.closeStatement(pstm);
        }
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

    private TimeRegister instantiatedTimeRegister(ResultSet rs) {
        TimeRegister tr = new TimeRegister();
        try {
            tr.setId(rs.getInt("id"));
            tr.setEmployeeId(rs.getInt("funcionario_id"));
            tr.setDateTime(rs.getTimestamp("data_hora").toLocalDateTime());
        } catch (Exception e) {
            throw new DBException(e.getMessage());
        }

        return tr;
    }

    public static void main(String[] args) {
        TimeRegisterRepository trr = new TimeRegisterRepository();

        TimeRegister tr = new TimeRegister();

        // tr.setId(1);
        // tr.setEmployeeId(1);
        // tr.setDateTime(LocalDateTime.now());

        try {
            // trr.update(tr);

            tr = trr.find(1);

            System.out.println(tr);

            System.out.println("Funcionou");
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
