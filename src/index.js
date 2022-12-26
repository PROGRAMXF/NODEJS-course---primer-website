
import express, { request, response } from 'express'

const app = express()

app.get('/',(request, response) =>{
    response.send('<h1>BIENVENIDO</h1>')
})
app.get('/about',(request, response) =>{
    response.send('<h1>about</h1>')
})

app.listen(process.env.PORT || 3000)
console.log("server on port", process.env.PORT || 3000)

