const bcrypt = require('bcrypt');
const {DOCTOR} = require('../../constants/credentials');
const pool = require('../../dataBase/index');

module.exports = async (req, res) => {

    try {
        const {name, surname, email, password} = req.body;
        if (!name || !surname || !email || !password) {
            throw new Error('Some fields are empty');
        }

        const [alreadyExist] = await pool.promise().query(`SELECT id, name, email FROM doctors WHERE email LIKE "${email}"`);
        if (alreadyExist[0]) throw new Error('This user already exist');

        const credentials = DOCTOR;
        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                console.log(err);
            } else await pool.promise().query(`INSERT INTO doctors(name, surname, email, password, credentials) VALUES ('${name}', '${surname}', '${email}', '${hash}', '${credentials}')`)
        });

        res.json({
            success: true,
            message: 'Doctor successfully registered'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
