import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const PersonagemRouter = express.Router();

// Rotas de Personagens
// GET /personagens - Listar todos os Personagens
personagensRouter.get("/", PersonagemController.getAllPersonagem);

// GET /api/Personagem/:id - Obter um Personagem pelo ID
personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /api/Personagem - Criar um novo Personagem
personagensRouter.post("/", PersonagemController.createPersonagem);

// PUT /api/Personagem/:id - Atualizar um Personagem
personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /api/Personagem/:id - Remover um Personagem
personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagensRouter;
