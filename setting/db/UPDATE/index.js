import pool from '../../connection/index';

module.exports = {
    async updatePasswordUserIdDb(req, res) {
        let response = await pool.query(`
        UPDATE Generals SET password = '${req.body.password}' WHERE userId = '${req.params.userId}';
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    },
    async updateNameDb(req, res) {
        let response = await pool.query(`
            UPDATE Generals SET name = '${req.body.name}' WHERE userId = '${req.params.userId}';
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    }
}