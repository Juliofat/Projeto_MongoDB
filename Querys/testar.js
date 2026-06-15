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

// Update remocoes:
