const pool = require('../../dataBase/index');
const tokenVerificator = require('../../helpers/tokenVerificator');
const {secret} = require('../../constants/secret');

module.exports = async (req, res) => {

    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token!');


        const {id} = tokenVerificator(token, secret);
        const [currentUser] = await pool.promise().query(`SELECT id, name, credentials FROM users WHERE id = ${id}`);
        if (!currentUser) throw new Error('This user does no registered');

        res.json({
            success: true,
            message: currentUser
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
