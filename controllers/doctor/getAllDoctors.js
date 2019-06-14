const pool = require('../../dataBase/index');

module.exports = async (req, res) => {

    try {
        const [allDoctors] = await pool.promise().query('SELECT * FROM doctors');

        res.json({
            success: true,
            message: allDoctors
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
