const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const bookRoutes  = require('./src/routes/bookRoutes');
const siswaRoutes = require('./src/routes/siswaRoutes');

const app = express();
app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api/v1', siswaRoutes);

const PORT = process.env.PORT_SERVER || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));