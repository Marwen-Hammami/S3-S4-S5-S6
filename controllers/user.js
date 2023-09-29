import User from '../models/user.js'

const users = [new User(1, "samsam", "12345678", 7)
, new User(2, "rouge", "azerty", 13)
, new User(3, "mango678", "0000", 60)]

export function getAll(req, res) {
    const resUsers = users
    for (let i = 0; i < resUsers.length; i++) {
        delete resUsers[i].id
    }
    res.status(200).json(resUsers);
}

export function addOnce(req, res) {
    const user = new User(users.length + 1, req.body.username, req.body.password, req.body.wallet)
    delete user.id
    users.push(user)
    res.status(200).json({ message: "Created !", entity: user})
}

export function getOnce(req, res) {
    const user = users.find(val => val.username === req.params.name)
    delete user.id
    res.status(200).json(user);
}

export function putOnce(req, res) {
    res.status(200).json({ message: "Updated !", name: req.params.name})
}

export function patchOnce(req, res) {
    const user = users.find(val => val.username === req.params.name)
    user.wallet += 20
    res.status(200).json({ message: `Updated ${user.username} wallet successfully !`, CurrentWallet: user.wallet})
}

export function deleteOnce(req, res) {
    res.status(200).json({ message: "Deleted !", name: req.params.name})
}

export function logIn(req, res) {
    const user = users.find(val => val.username === req.params.username)
    if(user.password === req.params.password) {
        res.status(200).json({ message: "Logged In successfully!", user: user});
    }else {
        res.status(500).json({ message: "Wrong credentials !"});
    }
}