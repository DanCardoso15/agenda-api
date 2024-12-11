import { DataTypes } from "sequelize";
import { connection } from "./connection.js";

const Agendamento = connection.define(
  "Agendamentos",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataAgendamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "data_agendamento",
    },
    horario: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

export default Agendamento;
