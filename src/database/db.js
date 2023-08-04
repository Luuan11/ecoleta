// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criando o database no projeto
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {

//     //criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

    //inserindo dados a tabela
    // const query = 
    // `   INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?); `

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //     "Paperside",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsetData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso!")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsetData)

    //Consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })
    
    // deleta um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [9], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")   
    // })

    //deixei comentado caso necessário deletar algum

// })