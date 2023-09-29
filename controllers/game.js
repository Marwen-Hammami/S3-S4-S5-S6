import Game from '../models/game.js'

const games = [new Game(1, "dmc5", "fun game", 9.99, 13)
, new Game(2, "re8", "best multiplayer", 12, 30)
, new Game(3, "gta5", "Latest gta", 49.99, 32)]

export function getAll(req, res) {
    const resGames = games
    for (let i = 0; i < resGames.length; i++) {
        delete resGames[i].id
    }
    res.status(200).json(resGames);
}

export function addOnce(req, res) {
    const game = new Game(games.length + 1, req.body.title, req.body.description, req.body.price, req.body.quantity)
    games.push(game)
    delete game.id
    res.status(200).json({ message: "Created !", entity: game})
}

export function getOnce(req, res) {
    const game = games.find(val => val.title === req.params.title)
    delete game.id
    res.status(200).json(game);
}

export function putOnce(req, res) {
    res.status(200).json({ message: "Updated !", name: req.params.name})
}

export function patchOnce(req, res) {
    const game = games.find(val => val.title === req.params.title)
    game.quantity -= 1
    res.status(200).json({ message: `Updated The Game ${game.title}, One copy got sold`, GameQuantity: game.quantity})
}

export function deleteOnce(req, res) {
    res.status(200).json({ message: "Deleted !", name: req.params.name})
}