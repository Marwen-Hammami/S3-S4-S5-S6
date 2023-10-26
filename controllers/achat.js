import Achat from '../models/achat.js'
import Game from '../models/game.js'
import User from '../models/user.js'

export function getAll(req, res) {
    Achat
    .find({})
    .then(docs => {
        res.status(200).json(docs)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function addOnce(req, res) {
    Achat
    .create(req.body)
    .then(newAchat => {
        res.status(200).json(newAchat)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function acheterJeu(req, res) {
    User
    .findOne({ "username": req.params.user})
    .then(user => {
        Game
        .findOne({ "title": req.params.game})
        .then(game => {
            var userHaveFunds = +user.wallet.toString() > +game.price.toString()
            if (game.quantity > 0 && userHaveFunds) {
                //update game
                Game
                .findOneAndUpdate({ "title" : game.title}, { "quantity": game.quantity - 1 })
                .then(doc => {
                    //update user
                    User
                    .findOneAndUpdate({ "username" : user.username}, { "wallet": user.wallet - game.price})   //new pour retourner l'objet apres modification
                    .then(doc2 => {
                        //add achat
                        const achat = new Achat({boughtDate: Date(), user: user, game: game})
                        achat.save()
                        .then(newAchat => {
                            res.status(200).json(newAchat)
                        })
                        .catch(err => {
                            res.status(500).json({error: err})
                        })
                    })
                    .catch(err => {
                        res.status(500).json({error: err})
                    })
                })
                .catch(err => {
                    res.status(500).json({error: err})
                })
            }else {
                res.status(500).json({message : "Jeu plus disponible ou fonds insuffisants"});
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}
