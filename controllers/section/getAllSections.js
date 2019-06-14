const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        const [allSections] = await pool.promise().query("SELECT * FROM sections");
        if (!allSections) throw new Error('No sections');

        res.json({
            success: true,
            message: allSections
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
