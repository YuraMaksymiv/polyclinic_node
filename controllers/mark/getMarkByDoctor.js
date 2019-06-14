const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        const doctor = req.params.id;

        const [doctorsMarks] = await pool.promise().query(`SELECT count(marks.id) as count_voices, avg(mark2doctors.mark_id) as average_mark 
        FROM doctors join mark2doctors on doctors.id = mark2doctors.doctor_id 
        join marks on marks.id = mark2doctors.mark_id where doctors.id = ${doctor} group by doctors.id`);


        res.json({
            success: true,
            message: doctorsMarks[0]
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
