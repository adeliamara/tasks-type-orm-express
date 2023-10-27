import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST_TASK,
  port: Number(process.env.DB_PORT_TASK),
  username: process.env.DB_USERNAME_TASK,
  password: process.env.DB_PASSWORD_TASK,
  database: process.env.DB_NAME_TASK,
  synchronize: false,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],  
  subscribers: [],
  migrations: ["src/**/migrations/*.{js,ts}"],
});

AppDataSource.initialize()
  .then(() => console.log("Database UP - OK"))
  .catch(console.error);