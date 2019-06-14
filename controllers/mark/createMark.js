const pool = require('../../dataBase/index');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {
    try {
        const {mark, doctor} = req.body;
        if (!mark || !doctor) throw new Error('Some field is empty');
        const token = req.get('Authorization');
        tokenVerificator(token);

        if (!token) throw new Error('You can not vote. Login or register please');

        await pool.promise().query(`INSERT INTO mark2doctors(mark_id, doctor_id) VALUES ('${mark}', '${doctor}')`);

        res.json({
            success: true,
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: e.message
        })
    }

};
