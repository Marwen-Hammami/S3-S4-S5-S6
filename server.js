import express from 'express';
import mongoose from 'mongoose';

import gameRoutes from './routes/game.js'
import achatRoutes from './routes/achat.js'
import userRoutes from './routes/user.js'

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;
const databaseName = 'workshop4gamix2223'

// Debut connexion à mongodb
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
    
// Fin   connexion à mongodb

app.use(express.json())

//app.use('/user', userRoutes)    //préfixe pour toutes les routes de gameRoutes
app.use(userRoutes)

//app.use('/game', gameRoutes)    //préfixe pour toutes les routes de gameRoutes
app.use(gameRoutes)

// app.use('/achat', achatRoutes)    //préfixe pour toutes les routes de gameRoutes
app.use(achatRoutes)





app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});