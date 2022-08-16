import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3304,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  logging: Boolean(process.env.DATABASE_LOGGING),
  migrations: ["dist/migration/*.js"],
  synchronize: false
});

export default AppDataSource