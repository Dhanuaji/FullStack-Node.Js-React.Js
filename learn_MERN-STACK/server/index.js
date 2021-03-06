const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const app = express();
const router = express.Router();
const db = require('./DbOperations');
const config = require('./DbConfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);
const PORT = process.env.PORT || 3001;

router.use((request, response, next) => {
    console.log("==========================<< MIDDLEWARE >>==========================");
    next();
});

router.route('/test').get((request, response, error) => {
    let conn = db.testConnection();
    if (conn === error) {
        response.send('failed to connect to database, caused by: '+error);
    } else {
        response.send('successfully connected to database server : '+config.dbName);
    }
});

router.route('/get-users').get((request, response) => {
    db.getUsers().then(result => {
        response.json(result);
        console.log(result);
    });
});

router.route('/get-users/:id').get((request, response) => {
    db.getUserById(request.params.id).then(result => {
        response.json(result);
        console.log(result);
    });
});

router.route('/insert-user').post((request, response) => {
    var {
        username,
        password,
        first_name,
        last_name,
        role
    } = request.body;
    try {
        var insert = db.insertUser(username, password, first_name, last_name, role).then(function (err){
            if (insert != err) {
                response.send(`data with value: ('${username}','${password}','${first_name}','${last_name}','${role}') INSERTED`);
            } else {
                response.send("failed to insert data");
            }
        });
    } catch (error) {
        response.send(error);
    };
});

app.listen(PORT, (request, response) => {
    console.log("This server API run at port: " + PORT);
});