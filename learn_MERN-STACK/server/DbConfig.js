var DbConfig = {
    server: 'DESKTOP-73E4RM8\\MSSQLSERVER',
    user: 'danuprat',
    password: 'slipkinot123',
    database: 'DEVSERVER-GUDANG',
    port: 1433,
    encrypt: false
};

var dbName = DbConfig.database+"/"+DbConfig.server;

module.exports = {
    DbConfig : DbConfig,
    dbName : dbName
}
