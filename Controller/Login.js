var express = require('express');
var router = express.Router();

const users = [
    {
        id:1,
        username: 'admin',
        password: 'admin1234'
    },
    {
        id:2,
        username: 'team1',
        password: '1234'
    },
    {
        id:3,
        username: 'team2',
        password: '1234'
    },
    {
        id:4,
        username: 'team3',
        password: '1234'
    },
    {
        id:5,
        username: 'team4',
        password: '1234'
    },
    {
        id:6,
        username: 'team5',
        password: '1234'
    },
    {
        id:7,
        username: 'team6',
        password: '1234'
    },
    {
        id:8,
        username: 'team7',
        password: '1234'
    },
    {
        id:9,
        username: 'team8',
        password: '1234'
    },
    {
        id:10,
        username: 'team9',
        password: '1234'
    }];

var routes = function()
{
    router.route('/')
    .post(function(req, res){
        if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
            return res.status(401).json({ message: 'Missing Authorization Header' });
        }
    
        // verify auth credentials
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        console.log(username);
        console.log(password);
        var user = users.find(a=> a.username === username && a.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid Authentication Credentials' });
        }
        res.status(200).json({
            id: user.id
        });
    });

    return router;
};
module.exports = routes;