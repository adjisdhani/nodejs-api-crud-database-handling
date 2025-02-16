const mysql = require('mysql2/promise');
const dbConfig = require('../config/db');

const authorize = (allowedRoles) => {
  return async (req, res, next) => {
    try {
	      const userId = req.header('X-User-ID');

	      if (!userId) {
	          return res.status(400).json({ message: "User ID is required in the header" });
	      }

	      const connection = await mysql.createConnection(dbConfig);
	      const [rows]     = await connection.query('SELECT role FROM admin WHERE id = ?', [userId]);
	      await connection.end();

	      if (rows.length > 0 && allowedRoles.includes(rows[0].role)) {
	          next();
	      } else {
	          res.status(403).json({ message: 'Forbidden' });
	      }
    } catch (error) {
      	  res.status(500).json({ message: 'Authorization error', error });
    }
  };
};

module.exports = authorize;