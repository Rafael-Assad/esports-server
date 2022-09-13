import express, { response } from "express"

const app = express()

app.get('/ads', (req, res) => { 
    return res.json([
        {id: 1, nome: "Algo"},
        {id: 2, nome: "outro"},
        {id: 3, nome: "singo"},
        {id: 4, nome: "bla"},
    ])


})

app.listen(3333)