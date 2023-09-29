import Achat from '../models/achat.js'
import Game from '../models/game.js'
import User from '../models/user.js'

const games = [new Game(1, "dmc5", "fun game", 9.99, 13)
, new Game(2, "re8", "best multiplayer", 12, 30)
, new Game(3, "gta5", "Latest gta", 49.99, 32)]

const users = [new User(1, "samsam", "12345678", 7)
, new User(2, "rouge", "azerty", 13)
, new User(3, "mango678", "0000", 60)]

const achats = [new Achat(0, "12-06-2023", users[0], games[2])]

export function getAll(req, res) {
    res.status(200).json(achats);
}

export function acheterJeu(req, res) {
    const jeuAacheter = req.params.game
    const acheteur = req.params.user

    const game = games.find(val => val.title === jeuAacheter)
    const user = users.find(val => val.username === acheteur)
    if (game.quantity > 0 && user.wallet > game.price) {
        game.quantity -= 1
        user.wallet -= game.price
        const achat = new Achat(achats.length, getCurrentDate(), user, game)
        achats.push(achat)
        res.status(200).json(achat);
    }else {
        res.status(500).json({message : "Jeu plus disponible ou fonds insuffisants"});
    }
}


function getCurrentDate() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate
}