const tokenVerificator = require('../../helpers/tokenVerificator');
const pool = require('../../dataBase/index');


module.exports = async (req, res) => {
    try {
        const idComment = req.params.id;
        if (!id) throw new Error('No id');

        const commentInfo = req.body;
        if (!commentInfo) throw new Error('Body is empty');
        const {author, comment} = commentInfo;

        if (!comment) {
            throw new Error('Please enter comment');
        }

        const token = req.get('Authorization');
        if (!token) throw new Error('No Token');
        const {id: idUser} = tokenVerificator(token);

        if (idUser === author) {
            await pool.promise().query(`UPDATE comments SET comment = "${comment}" WHERE id = "${idComment}"`);
        } else throw new Error('You can not update this comment');

        res.json({
            success: true,
            message: comment
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }

};
