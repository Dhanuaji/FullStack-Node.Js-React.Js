const sql = require('mssql');
const config = require('./DbConfig');

function testConnection() {
    try {
        var conn = sql.connect(config.DbConfig).then(function err(err) {
            if (conn === false) {
                console.log('failed to connect, caused by ' + error);
            } else {
                console.log('connection success to database server '+config.dbName);
            };
        });
    } catch (error) {
        console.log(error);
    }
};

async function getUsers() {
    try {
        let pool = await sql.connect(config.DbConfig);
        let getUsers = await pool.request().query("SELECT * FROM [DEVSERVER-GUDANG].[dbo].[users]");
        return getUsers.recordsets;
    } catch (error) {
        console.log(error);
    }
};

async function getUserById(userId) {
    try {
        let pool = await sql.connect(config.DbConfig);
        let getById = await pool.request()
        .input('input_param', sql.Int, userId)
        .query("SELECT * FROM [DEVSERVER-GUDANG].[dbo].[users] WHERE [id] = @input_param");
        return getById.recordset;
    } catch (error) {
        console.log(error);
    };
};

async function insertUser(username, password, first_name, last_name, role){
    try {
        let pool = await sql.connect(config.DbConfig);
        var insertUser = await pool.request().query(`INSERT INTO [DEVSERVER-GUDANG].[dbo].[users] 
        ([username], [password], [first_name], [last_name], [role]) 
        VALUES ('${username}','${password}','${first_name}','${last_name}','${role}')`).then(function (err) {
            if (insertUser != err) {
                console.log(`user with data: ('${username}','${password}','${first_name}','${last_name}','${role}') INSERTED`)
            }
        });
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    testConnection: testConnection,
    getUsers: getUsers,
    getUserById: getUserById,
    insertUser: insertUser
}