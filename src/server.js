const express = require("express")
const server = express()

// Pagina Inciial
// Req: Requisição
// Res: Resposta
server.get("/", (req, res) => {
    res.send("")
})

//ligando o servidor
server.listen(3000)