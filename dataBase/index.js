// const Sequilize = require('sequelize');
// const fs = require('fs');
// const resolve = require('path').resolve;
//
//
// module.exports = (() => {
//     let instance;
//
//     function initConnection() {
//         let client = new Sequilize('maksymiv_1800', 'root', 'root', {
//             host: 'localhost',
//             dialect: 'mysql',
//             operatorsAliases: false
//         });
//         let models = {};
//
//         function getModels() {
//             fs.readdir('./dataBase/models', (err, files) => {
//                 files.forEach(file => {
//                     const modelName = file.split('.')[0];
//                     models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`));
//                 });
//             });
//         }
//
//         return {
//             getModel: (modelName) => models[modelName],
//             setModels: () => {
//                 return getModels();
//             }
//         };
//     }
//
//     return {
//         getInstance: () => {
//             if (!instance) {
//                 instance = initConnection();
//             }
//             return instance;
//         }
//     }
//
// })();

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maksymiv_1800',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;