import "dotenv/config";
import express from "express";
import cors from "cors";
import agendaRoutes from "./routes/agendaRoutes.js";
import authenticate from "./database/connection.js";

authenticate();

const servidor = express();

servidor.use(cors({ origin: "*" }));

servidor.use(express.json());

servidor.use(agendaRoutes); // rotas... 

servidor.listen(3000, () => {
    console.log("Servidor em execução.");
});