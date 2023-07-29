// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criando o database no projeto
const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {

    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            CITY TEXT,
            items TEXT
        );
    `)
})