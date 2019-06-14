const tokenVerificator = require('../../helpers/tokenVerificator');
const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        const {comment, doctor} = req.body;
        const token = req.get('Authorization');
        const author = tokenVerificator(token);
        const date = new Date().toDateString();

        await pool.promise().query(`INSERT INTO comments(user_id, doctor_id, comment, date) VALUES ('${author.id}', '${doctor}', '${comment}', '${date}')`);

        res.json({
            success: true,
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
