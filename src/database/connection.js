import { Sequelize } from "sequelize";

const db = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;

const connection = new Sequelize(db, user, pass, {
  host,
  dialect: "mysql",
});

async function authenticate() {
  try {
    await connection.authenticate();
    await connection.sync();
    console.log("Conexão com o banco de dados estabelecida.");
  } catch {
    console.log("Conexão com o banco de dados falhou.");
  }
}

export default authenticate;
export { connection };