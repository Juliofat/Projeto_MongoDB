# Projeto MongoDB — Plataforma de eSports

## Descrição

Sistema de gerenciamento do cenário competitivo de esportes eletrônicos, desenvolvido com MongoDB. Permite armazenar e consultar dados de organizações, equipes, jogadores, jogos, patrocinadores, contratos e partidas.

---

## Estrutura do Banco de Dados

**Banco:** `plataforma_esports`

| Coleção | Quantidade | Descrição |
| --- | --- | --- |
| `organizacoes` | 8 | Organizações de eSports |
| `jogos` | 30 | Jogos eletrônicos |
| `equipes` | 22 | Equipes competitivas |
| `jogadores` | ~80 | Jogadores profissionais |
| `patrocinadores` | 22 | Patrocinadores |
| `contratos` | 36 | Contratos de patrocínio |
| `partidas` | 66 | Partidas disputadas e agendadas |

### Atributos principais por coleção

**organizacoes:** `_id, nome, cnpj, ano_fundacao, valor_mercado, sede, redes_sociais`

**jogos:** `_id, nome, genero, desenvolvedora, data_lancamento, plataformas`

**equipes:** `_id, nome, organizacao_id, jogo_id, orcamento_anual, ativa, conquistas`

**jogadores:** `_id, nickname, nome_completo, salario, equipe_id, funcoes, estatisticas, biografia, ativo`

**patrocinadores:** `_id, empresa, segmento, sede_mundial, global, site_oficial`

**contratos:** `_id, patrocinador_id, equipe_id, valor_mensal, vigencia, clausula_rescisoria`

**partidas:** `_id, jogo_id, torneio, fase, equipe_casa_id, equipe_visitante_id, data, duracao_minutos, placar, vencedor_id, status, mvp_id`

---

## Arquivos do Projeto

```text
Data_base/
  povoamento.js          — cria e popula todas as coleções
Querys/
  consulta_simples.js    — consultas e agregações
  updates_remocoes.js    — atualizações, inserções e remoções
```

---

## Checklist de Comandos (PDF)

### Implementados ✅ — 27/31

| # | Comando | Arquivo | Exemplo no código |
| --- | --- | --- | --- |
| 1 | `USE` | consulta_simples.js | `use("plataforma_esports")` |
| 2 | `FIND` | consulta_simples.js | `db.jogadores.find({...})` |
| 3 | `SIZE` | consulta_simples.js | `$size: "$conquistas"` |
| 4 | `AGGREGATE` | consulta_simples.js | `db.equipes.aggregate([...])` |
| 5 | `MATCH` | consulta_simples.js | `$match: { ativo: true }` |
| 6 | `PROJECT` | consulta_simples.js | `$project: { nome: 1, ... }` |
| 7 | `GTE` | consulta_simples.js | `{ salario: { $gte: 50000 } }` |
| 8 | `GROUP` | consulta_simples.js | `$group: { _id: "$equipe_id" }` |
| 9 | `SUM` | consulta_simples.js | `$sum: "$estatisticas.kills"` |
| 10 | `COUNT / COUNTDOCUMENTS` | testar.js | `db.jogadores.countDocuments({ data_partida: { ... }})` |
| 11 | `MAX` | testar.js | `$max: "$valor_mensal"`|
| 12 | `AVG` | testar.js | `$avg: "$estatisticas.kills"`|
| 13 | `EXISTS` | consulta_simples.js | `{ biografia: { $exists: true } }` |
| 14 | `SORT` | consulta_simples.js | `.sort({ pontuacao: -1 })` |
| 15 | `LIMIT` | consulta_simples.js | `.limit(3)` |
| 16 | `$WHERE` | consulta_simples.js | `$where: function() {...}` |
| 17 | `MAPREDUCE` | testar.js | `db.jogadores.mapReduce(mapFn, reduceFn, { out: "..." })` |
| 18 | `FUNCTION` | consulta_simples.js | função anônima dentro do `$where` |
| 19 | `PRETTY` | consulta_simples.js | `.pretty()` |
| 20 | `ALL` | consulta_simples.js | `{ plataformas: { $all: [...] } }` |
| 21 | `SET` | updates_remocoes.js | `$set: { funcoes, ativo }` |
| 22 | `TEXT` | testar.js | `createIndex({biografia: "text"})` |
| 24 | `FILTER` | consulta_simples.js | `$filter` em array de funções |
| 25 | `UPDATEONE` | updates_remocoes.js | `db.jogadores.updateOne(...)` |
| 26 | `SAVE` | updates_remocoes.js | `{ upsert: true }` + `insertOne` |
| 27 | `RENAMECOLLECTION` | updates_remocoes.js | `renameCollection("atletas")` |
| 31 | `ADDTOSET` | updates_remocoes.js | `$addToSet: { redes_sociais }` |

---

### Faltando ❌ — 5/31

| # | Comando | Como implementar |
| --- | --- | --- |
| 23 | `SEARCH` | `{ $text: { $search: "termo" } }` após criar índice |
| 25 | `UPDATEMANY` | `db.jogadores.updateMany({ ... }, { $set: { ... } })` |
| 28 | `COND` | `{ $cond: { if, then, else } }` dentro do `$project` |
| 29 | `LOOKUP` | join entre `partidas` e `equipes` no aggregate |
| 30 | `FINDONE` | `db.jogadores.findOne({ nickname: "FalleN" })` |

---

## Como Executar

```bash
# 1. Popular o banco (primeira vez)
mongosh --file "Data_base/povoamento.js"

# 2. Rodar consultas
mongosh --file "Querys/consulta_simples.js"

# 3. Rodar atualizações
mongosh --file "Querys/updates_remocoes.js"
```
