import Game from '../models/game.js'

export function getAll(req, res) {
    Game
    .find({}, '-_id')   //to exclude _id from results
    .then(docs => {
        res.status(200).json(docs)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function addOnce(req, res) {
    const game = new Game(req.body)
    game.save()
    .then(newGame => {
        res.status(200).json(newGame)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function getOnce(req, res) {
    Game
    .findOne({ "title": req.params.title}, '-_id')
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function putAll(req, res) {
    Game
    .updateMany({}, { "price": 13.99})
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function patchOnce(req, res) {
    Game
    .findOneAndUpdate({ "title" : req.params.title}, { "price": 9.99}, { new: true })   //new pour retourner l'objet apres modification
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function deleteOnce(req, res) {
    Game
    .findOneAndRemove({ "title" : req.params.title})
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}