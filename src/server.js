const express = require("express")
const server = express()

//obter o banco de dados
const db = require("./database/db")

//configurando pasta public
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views/", {
    express: server,
    noCache: true
})

// Pagina Inicial
// Req: Requisição
// Res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", {title : "Um titulo"})
})

// Página de criação de pontos
server.get("/create-point", (req, res) => {

    req.query

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    const query = 
    `   INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?); `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsetData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)
    }

    db.run(query, values, afterInsetData)

    return res.render("create-point.html", {saved: true })
})

server.get("/search", (req, res) => {

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("search-results.html", { places: rows, total: total})
    })
})

//ligando o servidor
server.listen(3000)