import express from 'express';
import gameRoutes from './routes/game.js'
import achatRoutes from './routes/achat.js'
import userRoutes from './routes/user.js'

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;

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