const pool = require('../../dataBase/index');

module.exports = async (req, res) => {
    try {
        const doctorId = req.params.id;
        let {page = 1} = req.query;
        console.log(page);
        const limit = 10;
        if (+page === 0) page = 1;
        page = page - 1;

        const [comments] = await pool.promise().query(`SELECT comments.id AS id, comment, users.name AS author, users.id AS author_id FROM comments
            JOIN users ON users.id = user_id WHERE doctor_id = ${doctorId} LIMIT ${+limit} OFFSET ${limit*page}` );

        res.json({
            success: true,
            message: comments
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
