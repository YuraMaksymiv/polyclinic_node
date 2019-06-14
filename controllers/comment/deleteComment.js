const tokenVerificator = require('../../helpers/tokenVerificator');
const pool = require('../../dataBase/index');


module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const token = req.get('Authorization');
        if (!token) throw new Error('No Token');
        const {id: idUser} = tokenVerificator(token);
        const [response] = await pool.promise().query(`SELECT user_id from comments WHERE id = ${id}`);
        const author = response[0].user_id;

        if (idUser === author) {
            await pool.promise().query(`DELETE FROM comments WHERE id = ${id}`);
        } else throw new Error('You can not delete this comment');

        res.json({
            success: true,
            message: "Comment delete."
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
