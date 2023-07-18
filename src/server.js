const express = require("express")
const server = express()

//configurando pasta public
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views/", {
    express: server,
    noCache: true
})

// Pagina Inciial
// Req: Requisição
// Res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

// Página de criação de pontos
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ligando o servidor
server.listen(3000)