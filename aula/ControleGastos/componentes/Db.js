import * as SQLite from 'expo-sqlite';

const bcodados = SQLite.openDatabase('gastos.db');

export const iniciar = () => {

    const executar = (tx, resolve, reject) => {

        tx.executeSql('CREATE TABLE IF NOT EXISTS gastos (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT NOT NULL, valor REAL NOT NULL);',
            [],
            (_, rs) => resolve(rs),
            (_, err) => reject(err)
        );
    }

    return new Promise((resolve, reject) => {
        bcodados.transaction((tx) => executar(tx, resolve, reject), reject, resolve);
    });
}

export const inserir = (descricao, valor) => {

    const executar = (tx, resolve, reject) => {

        tx.executeSql("INSERT INTO GASTOS (descricao, valor) VALUES (?, ?)",
            [descricao, valor],
            (_, rs) => resolve(rs),
            reject
        );
    }

    return new Promise((resolve, reject) => {
        bcodados.transaction((tx) => executar(tx, resolve, reject), reject, resolve);
    });
}

export const excluir = (id) => {

    const executar = (tx, resolve, reject) => {

        tx.executeSql("DELETE FROM GASTOS WHERE id = ?",
            [id],
            (_, rs) => resolve(rs),
            reject
        );
    }

    return new Promise((resolve, reject) => {
        bcodados.transaction((tx) => executar(tx, resolve, reject), reject, resolve);
    });
}

export const listar = async () => {

    const executar = (tx, resolve, reject) => {

        tx.executeSql('SELECT * FROM gastos',
            [],
            (_, rs) => resolve(rs.rows._array),
            reject
        );
    }

    return new Promise((resolve, reject) => {
        bcodados.transaction((tx) => executar(tx, resolve, reject), reject, resolve);
    });

}