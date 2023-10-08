import User from '../models/user.js'

export function getAll(req, res) {
    User
    .find({}, '-_id')   //to exclude _id from results
    .then(docs => {
        res.status(200).json(docs)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function addOnce(req, res) {
    const user = new User(req.body)
    user.save()
    .then(newUser => {
        res.status(200).json(newUser)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function getOnce(req, res) {
    User
    .findOne({ "username": req.params.name}, '-_id')
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function putAll(req, res) {
    User
    .updateMany({}, { "password": "********"})
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function patchOnce(req, res) {
    User
    .findOneAndUpdate({ "username" : req.params.name}, { "wallet": 19.99}, { new: true })   //new pour retourner l'objet apres modification
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function deleteOnce(req, res) {
    User
    .findOneAndRemove({ "username" : req.params.name})
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

export function logIn(req, res) {
    User
    .findOne({ "username": req.params.username})
    .then(doc => {
        if(doc.password === req.params.password) {
            res.status(200).json({ message: "Logged In successfully!", user: doc});
        }else {
            res.status(500).json({ message: "Wrong credentials !"});
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}