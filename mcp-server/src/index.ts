import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import axios from "axios";
import { z } from "zod";

const apiKey = process.env.PT_API_KEY;
if (!apiKey) {
  console.error("Missing PT_API_KEY environment variable");
  process.exit(1);
}

const api = axios.create({
  baseURL: "https://api.portaldatransparencia.gov.br",
  headers: { "chave-api-dados": apiKey }
});

const server = new McpServer({ name: "TransparenciaGovMCP", version: "1.0.0" });

server.registerTool(
  "consultar-despesas",
  {
    title: "Consultar Despesas",
    description: "Busca despesas publicas por data",
    inputSchema: { dataInicial: z.string(), dataFinal: z.string() }
  },
  async ({ dataInicial, dataFinal }) => {
    const resp = await api.get("/api-de-dados/despesas/documentos", {
      params: { dataInicio: dataInicial, dataFim: dataFinal }
    });
    return { content: [{ type: "text", text: JSON.stringify(resp.data) }] };
  }
);

server.registerTool(
  "consultar-licitacoes",
  {
    title: "Consultar Licitacoes",
    description: "Busca licitacoes por valor minimo",
    inputSchema: { valorMinimo: z.string() }
  },
  async ({ valorMinimo }) => {
    const resp = await api.get("/api-de-dados/licitacoes", {
      params: { valor_minimo: valorMinimo }
    });
    return { content: [{ type: "text", text: JSON.stringify(resp.data) }] };
  }
);

server.registerTool(
  "consultar-contratos",
  {
    title: "Consultar Contratos",
    description: "Detalha contratos governamentais",
    inputSchema: { numero: z.string() }
  },
  async ({ numero }) => {
    const resp = await api.get("/api-de-dados/contratos", {
      params: { numContrato: numero }
    });
    return { content: [{ type: "text", text: JSON.stringify(resp.data) }] };
  }
);

const transport = new StdioServerTransport();
server.connect(transport).catch(err => {
  console.error("Server error", err);
});
