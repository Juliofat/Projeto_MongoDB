use("plataforma_esports")

// ── $where: atletas com mais kills do que o dobro de deaths ────────────────
printjson(db.atletas.find({
    $where: function () {
        return this.estatisticas.kills > (2 * this.estatisticas.deaths);
    }
}).toArray())


// ── SORT + LIMIT + PRETTY: top 3 equipes por pontuação ──────────────────────
// printjson() e .toArray() garantem que o resultado seja exibido no console ao rodar o script
printjson(db.equipes.find(
    {},
    { _id: 0, nome: 1, pontuacao: 1 }
)
    .sort({ pontuacao: -1 })
    .limit(3)
    .toArray())


// ── AGGREGATE + PROJECT + SIZE: 2 equipes com mais conquistas ───────────────
printjson(db.equipes.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,
            total_conquistas: { $size: "$conquistas" }
        }
    },
    { $sort: { total_conquistas: -1 } },
    { $limit: 2 }
]).toArray())


// ── GTE: atletas com salário >= 50.000 ────────────────────────────────────
printjson(db.atletas.find(
    { salario: { $gte: 50000 } },
    { _id: 0, nickname: 1, salario: 1 }
).toArray())


// ── EXISTS: atletas que possuem o campo biografia ─────────────────────────
printjson(db.atletas.find(
    { biografia: { $exists: true } },
    { _id: 0, nickname: 1, biografia: 1 }
).toArray())


// ── ALL: jogos disponíveis em Windows E Android ──────────────────────────────
printjson(db.jogos.find(
    { plataformas: { $all: ["Windows", "Android"] } },
    { _id: 0, nome: 1, plataformas: 1 }
).toArray())


// ── AGGREGATE + MATCH + GROUP + SUM + MAX: estatísticas por equipe ──────────
// $match filtra só atletas ativos
// $group agrupa por equipe calculando total de kills ($sum) e maior salário ($max)
printjson(db.atletas.aggregate([
    {
        $match: { ativo: true }
    },
    {
        $group: {
            _id: "$equipe_id",
            total_kills: { $sum: "$estatisticas.kills" },
            maior_salario: { $max: "$salario" },
            media_salario: { $avg: "$salario" }
        }
    },
    { $sort: { total_kills: -1 } }
]).toArray())


// ── AGGREGATE + FILTER: mostrar só funções ofensivas de cada atletas ─────────
// $filter percorre o array "funcoes" e mantém apenas as funções ofensivas
printjson(db.atletas.aggregate([
    {
        $project: {
            _id: 0,
            nickname: 1,
            funcoes_ofensivas: {
                $filter: {
                    input: "$funcoes",
                    as: "f",
                    cond: {
                        $in: ["$$f", ["ADC", "Mid Lane", "Entry Fragger", "Duelista", "AWPer", "Fragger"]]
                    }
                }
            }
        }
    },
    {
        $match: { funcoes_ofensivas: { $exists: true, $ne: [] } }
    }
]).toArray())

// ── 23. SEARCH (com criação automática de índice de texto) ──────────────────
// Criando o índice de texto na biografia para garantir que o $search não falhe
db.atletas.createIndex({ biografia: "text" })

// Executando a busca por atletas com "prodigio" na biografia
printjson(db.atletas.find(
    { $text: { $search: "prodigio" } },
    { _id: 0, nickname: 1, biografia: 1, score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } }).toArray())


// ── 25. UPDATEMANY ──────────────────────────────────────────────────────────
// Aplicando um aumento de 10% no orçamento anual de todas as equipes ativas
db.equipes.updateMany(
    { ativa: true },
    { $mul: { orcamento_anual: 1.10 } }
)


// ── 28. COND ────────────────────────────────────────────────────────────────
// Classificando os salários dos atletas usando uma estrutura condicional ($cond)
printjson(db.atletas.aggregate([
    {
        $project: {
            _id: 0,
            nickname: 1,
            salario: 1,
            categoria_salario: {
                $cond: {
                    if: { $gte: ["$salario", 50000] },
                    then: "Salário Alto",
                    else: "Salário Padrão"
                }
            }
        }
    },
    { $limit: 5 }
]).toArray())


// ── 29. LOOKUP ──────────────────────────────────────────────────────────────
// Fazendo a junção (JOIN) entre a coleção de equipes e a de organizações
printjson(db.equipes.aggregate([
    {
        $lookup: {
            from: "organizacoes",
            localField: "organizacao_id",
            foreignField: "_id",
            as: "dados_organizacao"
        }
    },
    {
        $project: {
            _id: 0,
            nome: 1,
            orcamento_anual: 1,
            "dados_organizacao.nome": 1,
            "dados_organizacao.valor_mercado": 1
        }
    },
    { $limit: 3 }
]).toArray())


// ── 30. FINDONE ─────────────────────────────────────────────────────────────
// Buscando o documento individual e específico do atletas "FalleN"
printjson(db.atletas.findOne(
    { nickname: "FalleN" }
))


// Consulta simples:

// ── COUNT / COUNTDOCUMENTS: Numero de partidas que ocorreram em março e abril de 2025 ─────────
// countDocuments() conta quantos documentos atendem ao filtro informado.
print(db.partidas.countDocuments({
    data_partida: {
        $gte: ISODate("2025-03-01"),
        $lt: ISODate("2025-05-01")
    }
}))


// ── AGGREGATE + GROUP + MAX: maior valor de contrato ─────────────────────────
// $group reúne todos os contratos em um único grupo (_id: null)
// $max identifica o maior valor encontrado no campo valor_mensal
printjson(db.contratos.aggregate([
    {
        $group: {
            _id: null,
            maior_valor_contrato: { $max: "$valor_mensal" }
        }
    }
]).toArray())


// ── AGGREGATE + GROUP + AVG: média de kills por equipe ──────────────────────
// $group agrupa os documentos pelo campo equipe_id
// $avg calcula a média de kills (estatisticas.kills) dos jogadores de cada equipe
printjson(db.atletas.aggregate([
    {
        $group: {
            _id: "$equipe_id",
            media_kills: { $avg: "$estatisticas.kills" }
        }
    }
]).toArray())


// ── MAPREDUCE: total de kills por equipe ────────────────────────────────────
// map percorre os jogadores emitindo (equipe_id, kills)
// reduce agrupa os valores da mesma equipe e calcula o total de kills
db.atletas.mapReduce(
    function () {
        emit(this.equipe_id, this.estatisticas.kills);
    },
    function (equipe, valores) {
        return Array.sum(valores);
    },
    {
        out: "kills_por_equipe"
    }
)
printjson(db.kills_por_equipe.find().toArray())


// ── TEXT: busca textual na biografia dos jogadores ──────────────────────────
// createIndex cria um índice de texto no campo biografia
db.atletas.createIndex({
    biografia: "text"
})

// $text utiliza índice para localizar jogadores que contenham a palavra "veterano" na biografia 
printjson(db.atletas.find(
    {
        $text: {
            $search: "veterano"
        }
    },
    {
        _id: 0,
        nickname: 1,
        biografia: 1
    }
).toArray())