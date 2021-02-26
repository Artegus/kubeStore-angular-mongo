require('../models/user');

const mongoose = require('mongoose');
const users = mongoose.model('Users');


async function verifyUser(req, res) {
    try {

        if (!(req.body.username === 'oscar' && req.body.password === '1234')) {
            res.status(401).send({ error: 'usuario o contraseña inválidos' })
            return
        }

        const token = generateAccessToken({ username: req.body.username });
        res.json(token);

    } catch (error) {
        return res.status(400).send({
            status: 'failure'
        });
    }
}


module.exports = { verifyUser };
