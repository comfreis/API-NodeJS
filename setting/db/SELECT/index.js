import pool from '../../connection/index';

module.exports = {
    async selectAllDb(req, res) {
        let response = await pool.query(`
            SELECT * from Generals;
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    },
    async selectIdDb(req, res) {
        let response = await pool.query(`
            SELECT * from Generals WHERE id = ${req.params.id};
        `);

        try {
            res.json(response[0]);
        } catch (error) {
            res.json(error);
        }
    },
    async selectUserIdDb(req, res) {
        let response = await pool.query(`
            SELECT * from Generals WHERE userId = '${req.params.userId}';
        `);

        try {
            res.json(response[0][0]);
        } catch (error) {
            res.json(error);
        }
    },
    async selectUserNameDb(req, res) {
        let response = await pool.query(`
            SELECT * from Generals WHERE username = '${req.params.username}';
        `);

        try {
            res.json(response[0][0]);
        } catch (error) {
            res.json(error);
        }
    },
    async selectUserLogedDb(req, res) {
        let response = await pool.query(`
            SELECT * from Logs WHERE userId = '${req.params.userLoged}';
        `);

        try {
            res.json(response[0][0]);
        } catch (error) {
            res.json(error);
        }
    }
}