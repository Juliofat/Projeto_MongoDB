// Jogadores com salário acima de 50 mil

db.pessoas.find({
    tipo: "jogador",
    salario: { $gte: 50000 }
}).sort({ salario: -1 })




// Maior folha salarial por equipe

db.pessoas.aggregate([
    {
        $match: { tipo: "jogador" }
    },
    {
        $group: {
            _id: "$equipe_id",
            folha_salarial: { $sum: "$salario" }
        }
    },
    {
        $sort: { folha_salarial: -1 }
    }
])




// Patrocinador que mais investe

db.contratos.aggregate([
    {
        $group: {
            _id: "$patrocinador_id",
            total_investido: {
                $sum: "$valor_contrato"
            }
        }
    },
    {
        $sort: {
            total_investido: -1
        }
    }
])




//  Equipes e suas organizacoes

db.equipes.aggregate([
    {
        $lookup: {
            from: "organizacoes",
            localField: "organizacao_id",
            foreignField: "_id",
            as: "organizacao"
        }
    },
    {
        $unwind: "$organizacao"
    },
    {
        $project: {
            _id: 0,
            equipe: "$nome",
            organizacao: "$organizacao.nome"
        }
    }
])




//  Jogo com mais equipes

db.equipes.aggregate([
    {
        $group: {
            _id: "$jogo_id",
            quantidade_equipes: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "jogos",
            localField: "_id",
            foreignField: "_id",
            as: "jogo"
        }
    },
    {
        $unwind: "$jogo"
    },
    {
        $sort: {
            quantidade_equipes: -1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
            _id: 0,
            jogo: "$jogo.nome",
            quantidade_equipes: 1
        }
    }
])