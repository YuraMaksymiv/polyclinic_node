const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        let section = req.params.sectionId;
        if (!section) {
            throw new Error('Select section')
        }

        const [doctorsFromSection] = await pool.promise().query(`SELECT doctors.id AS id, name, surname, description, phone, email, floor, room_number, working_days 
        FROM doctors JOIN sections ON doctors.section_id = sections.id WHERE sections.id = ${section}`);

        res.json({
            success: true,
            message: doctorsFromSection
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
