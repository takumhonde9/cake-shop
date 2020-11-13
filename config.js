import dotenv from "dotenv";
// configure the dot env file
// by default, checks __dirname+"/.env"
dotenv.config();
export const config = {
  port: process.env.PORT,
};
