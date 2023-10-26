import express from 'express'
import mongoose from 'mongoose'

import gameRoutes from './routes/game.js'
import achatRoutes from './routes/achat.js'
import userRoutes from './routes/user.js'

import {notFoundError, errorHandler} from './middlewares/error-handler.js'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

const hostname = '127.0.0.1'
const port = process.env.PORT || 9090
const databaseName = 'workshop4gamix2223'

// Debut connexion à mongodb **********************************
//affiche les requetes mongodb dans le terminal
mongoose.set('debug', true)
// Utilisation des promesses ES6 pour mongodb
mongoose.Promise = global.Promise

//Se connecter à MongoDB
mongoose
    .connect(`mongodb://${hostname}:27017/${databaseName}`)
    .then(() => {
        console.log(`Connected to ${databaseName}`)
    })
    .catch(err => {
        console.log(err)
    })
    
// Fin   connexion à mongodb **********************************

//Debut Appel des MiddleWares *********************************
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//app.use(express.static('public'))                 //Donne access à tous le dossier public
app.use('/img', express.static('public/images'))    //Donne access seulement aux images sous la route /img

//Fin Appel des MiddleWares *********************************** 


app.use('/user', userRoutes)

app.use('/game', gameRoutes)

app.use('/achats', achatRoutes)

//Debut Appel des Errors Middleware (doit etre apres l'appel des routes)
app.use(notFoundError)
app.use(errorHandler)
//Fin Appel des Errors Middleware (doit etre apres l'appel des routes)



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});