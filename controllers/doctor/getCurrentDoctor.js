const pool = require('../../dataBase/index');
const tokenVerificator = require('../../helpers/tokenVerificator');
const {secret} = require('../../constants/secret');

module.exports = async (req, res) => {

    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token!');


        const {id} = tokenVerificator(token, secret);
        const [currentDoctor] = await pool.promise().query(`SELECT id, name, credentials FROM doctors WHERE id = ${id}`);
        if (!currentDoctor) throw new Error('This doctor does no registered');

        res.json({
            success: true,
            message: currentDoctor
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
