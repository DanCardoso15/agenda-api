import { Router } from "express";
import Agendamento from "../database/Agendamento.js";

const agendaRoutes = Router();

agendaRoutes.get("/Agendamentos", async (req, res) => {
  try {
    const Agendamentos = await Agendamento.findAll();
    res.json(Agendamentos);
  } catch {
    console.error(erro);
    res.status(500).json({
      mensagem: "Erro no servidor. Tente mais tarde.",
    });
  }
});

agendaRoutes.get("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agendamento = await Agendamento.findByPk(id);

    if (agendamento) {
      res.json(agendamento);
    } else {
      res.status(404).json({
        mensagem: "Agendamento não encontrado.",
      });
    }
  } catch {
    console.error(erro);
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

agendaRoutes.post("/agendamentos", async (req, res) => {
  try {
    const dados = req.body;
    const salvo = await Agendamento.create(dados);
    res.json(salvo);
  } catch {
    console.error(erro);
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

agendaRoutes.put("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;
    console.log(dados);

    const agendamento = await Agendamento.findByPk(id);

    if (agendamento) {
      await agendamento.update(dados);
      res.json(agendamento);
    } else {
      res.status(404).json({
        mensagem: "Agendamento não encontrado.",
      });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

agendaRoutes.delete("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agendamento = await Agendamento.findByPk(id);

    if (agendamento) {
      await agendamento.destroy();
      res.json({ mensagem: "Agendamento removido." });
    } else {
      res.status(404).json({
        mensagem: "Agendamento não encontrado.",
      });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

export default agendaRoutes;
