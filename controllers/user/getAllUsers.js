const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        const [allUsers] = await pool.promise().query('SELECT * FROM users');
        if(!allUsers) throw new Error('No users');

        res.json({
            success: true,
            message: allUsers
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
