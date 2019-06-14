const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('Enter id');

        const [foundedDoctor] = await pool.promise().query(`SELECT * FROM doctors WHERE id = ${id}`);
        if (!foundedDoctor) throw new Error("Doctor with this id does not exist");

        res.json({
            success: true,
            message: foundedDoctor
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
