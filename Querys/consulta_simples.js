use ("plataforma_esports")

// ── $where: jogadores com mais kills do que o dobro de deaths ────────────────
printjson(db.jogadores.find({
    $where: function() {
        return this.estatisticas.kills > (2 * this.estatisticas.deaths);
    }
}).toArray())


// ── SORT + LIMIT + PRETTY: top 3 equipes por pontuação ──────────────────────
// .pretty() formata o resultado de forma legível
db.equipes.find(
    {},
    { _id: 0, nome: 1, pontuacao: 1 }
)
.sort({ pontuacao: -1 })
.limit(3)
.pretty()


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


// ── GTE: jogadores com salário >= 50.000 ────────────────────────────────────
printjson(db.jogadores.find(
    { salario: { $gte: 50000 } },
    { _id: 0, nickname: 1, salario: 1 }
).toArray())


// ── EXISTS: jogadores que possuem o campo biografia ─────────────────────────
printjson(db.jogadores.find(
    { biografia: { $exists: true } },
    { _id: 0, nickname: 1, biografia: 1 }
).toArray())


// ── ALL: jogos disponíveis em Windows E Android ──────────────────────────────
printjson(db.jogos.find(
    { plataformas: { $all: ["Windows", "Android"] } },
    { _id: 0, nome: 1, plataformas: 1 }
).toArray())


// ── AGGREGATE + MATCH + GROUP + SUM + MAX: estatísticas por equipe ──────────
// $match filtra só jogadores ativos
// $group agrupa por equipe calculando total de kills ($sum) e maior salário ($max)
printjson(db.jogadores.aggregate([
    {
        $match: { ativo: true }
    },
    {
        $group: {
            _id: "$equipe_id",
            total_kills:    { $sum: "$estatisticas.kills" },
            maior_salario:  { $max: "$salario" },
            media_salario:  { $avg: "$salario" }
        }
    },
    { $sort: { total_kills: -1 } }
]).toArray())


// ── AGGREGATE + FILTER: mostrar só funções ofensivas de cada jogador ─────────
// $filter percorre o array "funcoes" e mantém apenas as funções ofensivas
printjson(db.jogadores.aggregate([
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