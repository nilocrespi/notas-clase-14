import {getMovies, createMovie} from "./controllers/movie.controller.js"
import express from "express"
import cors from "cors"

// servidor http
const app = express ()
app.use (cors ())
// Habilita la posibilidad de recibir obj json desde el front
app.use (express.json ())

// callback
//ENDPOINT para obtener lista de elementos
app.get("/movies",async (req, res) => {
    const movies = await getMovies ()
    res.send(movies)
})

//ENDPOINT para agregar elemento
app.post("/movies", async (req, res) => {
    // req -> request -> información del cliente
    const body = req.body
    const createdMovie = await createMovie(body)
    res.json(createdMovie)
})

// definir puertos (hay de 0 a 65656)
app.listen (50000)


