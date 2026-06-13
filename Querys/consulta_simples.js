use ("plataforma_esports")

// $where para filtrar jogadores com mais kills do que o dobro de deaths
db.jogadores.find({
    $where: function() {
        return this.estatisticas.kills > (2 * this.estatisticas.deaths);
    }
})



// sort parar ordernar os tres (limit) melhores esquipes por pontuacao decrescente (-1)

db.equipes.find(
    {},
    {
        _id: 0,
        nome: 1,
        pontuacao: 1
    }
)
.sort({ pontuacao: -1 })
.limit(3)

// aggregate para identificar 2 primeiras equipe com o maior numero de conquistas
// $projet cria um campo total_conquista e $size conta o numero de itens >
//  $sort ordena em ordem decresente e $limit retorna as 2 primeiras


db.equipes.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,
            total_conquistas: {
                $size: "$conquistas"
            }
        }
    },
    {
        $sort: {
            total_conquistas: -1
        }
    },
    {
        $limit: 2
    }
])