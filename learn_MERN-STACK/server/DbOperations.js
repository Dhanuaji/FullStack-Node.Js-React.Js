const sql = require('mssql');
const config = require('./DbConfig');

function testConnection() {
    try {
        var conn = sql.connect(config.DbConfig).then(function err(err) {
            if (conn === false) {
                console.log('failed to connect, caused by ' + err);
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

//MOLD OPERATIONS
//Get All Molds
async function getAllMoldRequest(params) {
    try {
        let pool = await sql.connect(config.DbConfig);
        let getAllMoldRequest = await pool.request().query("SELECT * FROM [FMLX_IME].[dbo].[ime.tbl_mold.requests]");
        return getAllMoldRequest.recordsets;
    } catch (error) {
        console.log(error);
    };
}

//Insert Mold
async function insertMoldRequest(req, res) {
    try {
        if (req.body.id != null, req.body.form_number != null, req.body.document_number != null, req.body.request_date != null, req.body.design_type != null, req.body.design_kind != null, req.body.part_name != null) {
            const pool = await sql.connect(config.DbConfig);
            const result = await pool.request()
                .input('id', sql.Int, id)
                .input('form_number', sql.VarChar, form_number)
                .input('document_number', sql.VarChar, document_number)
                .input('request_date', sql.Date, request_date)
                .input('design_type', sql.VarChar, design_type)
                .input('design_kind', sql.VarChar, design_kind)
                .input('part_name', sql.VarChar, part_name)
                .input('part_number', sql.Int, part_number)
                .input('data_location', sql.VarChar, data_location)
                .input('estimate_finish_date', sql.Date, estimate_finish_date)
                .input('author_name', sql.Int, author_name)
                .query("INSERT INTO [DEVSERVER_GUDANG].[dbo].[ime.tbl_mold.request] (id, form_number, document_number, request_date, design_type, design_kind, part_name, part_number, data_location, estimate_finish_date, author_name) VALUES" +
                    "(@id, @form_number, @document_number, @request_date, @design_type, @design_kind, @part_name, @part_number, @data_location, @estimate_finish_date, @author_name)")
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    testConnection: testConnection,
    getUsers: getUsers,
    getUserById: getUserById,
    insertUser: insertUser,
    getAllMoldRequest: getAllMoldRequest,
    insertMoldRequest: insertMoldRequest
}