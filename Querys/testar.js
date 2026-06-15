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
printjson(db.jogadores.aggregate([
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
db.jogadores.mapReduce(
    function() {
        emit(this.equipe_id, this.estatisticas.kills);
    },
    function(equipe, valores) {
        return Array.sum(valores);
    },
    {
        out: "kills_por_equipe"
    }
)
printjson(db.kills_por_equipe.find().toArray())


// ── TEXT: busca textual na biografia dos jogadores ──────────────────────────
// createIndex cria um índice de texto no campo biografia
db.jogadores.createIndex({
    biografia: "text"
})

// $text utiliza índice para localizar jogadores que contenham a palavra "veterano" na biografia 
printjson(db.jogadores.find(
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