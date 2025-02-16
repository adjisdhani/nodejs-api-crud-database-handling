import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + "/../models/*.ts"],
  synchronize: true, // Auto-migrate, di production ubah ke false
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected...");
    app.listen(process.env.PORT_SERVER, () => console.log(`Server running on port ${process.env.PORT_SERVER}`));
  })
  .catch((error) => console.log(error));

module.exports = AppDataSource;
