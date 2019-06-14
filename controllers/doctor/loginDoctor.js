const tokinazer = require('../../helpers/tokinazer');
const bcrypt = require('bcrypt');
const pool = require('../../dataBase/index');

module.exports = async (req, res) => {

    try {
        const {email, password} = req.body;
        if (!email || !password) throw new Error('Some fields are empty');

        const [doctor] = await pool.promise().query(`SELECT id, email, password, credentials FROM doctors WHERE email LIKE "${email}"`);
        const [TextRow] = doctor;

        if (!doctor) throw new Error('User with this email does not exist');


        const correctPassword = await new Promise((resolve, reject) => {
            bcrypt.compare(password, TextRow.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                return resolve(result);
            });
        });

        if (!correctPassword) throw new Error('Wrong password');

        const {id, credentials} = TextRow;
        const accessToken = tokinazer(id, credentials);


        res.json({
            success: true,
            message: accessToken,
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
