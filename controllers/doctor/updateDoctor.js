const tokenVerificator = require('../../helpers/tokenVerificator');
const pool = require('../../dataBase/index');
const {DOCTOR} = require('../../constants/credentials');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const {experience = 0, description = 0, phone = 0, floor = 0, room_number = 0} = req.body;
        if (!doctorInfo) throw new Error('Body is empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No Token');
        const {id: idDoctor, credentials: currentDoctorCredentials} = tokenVerificator(token);

        if (currentDoctorCredentials === DOCTOR || idDoctor !== id) {
            await pool.promise().query(`UPDATE doctors SET experience = "${experience}",
           description = "${description}", phone = "${phone}", floor = "${floor}", room_number = "${room_number}"  WHERE id = ${id}`)
        } else throw new Error('You have no credentials to do it');

        res.json({
            success: true
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
