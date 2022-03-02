import pool from '../../connection/index';

module.exports = {
    async deleteIdDb(req, res) {
        let response = await pool.query(`
            DELETE from Generals WHERE id = ${req.params.id};
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    },
    async deleteUserIdDb(req, res) {
        let response = await pool.query(`
            DELETE from Generals WHERE userId = '${req.params.userId}';
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    },
    async deleteNameDb(req, res) {
        let response = await pool.query(`
            DELETE from Generals WHERE name = '${req.params.name}';
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    }
}