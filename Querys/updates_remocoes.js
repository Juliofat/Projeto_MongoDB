
//definindo o banco de dados que usaremos

use ("plataforma_esports")



//Alterando o status e a funcao de alguns jogadores da equipe :
/*

updateOne --> procura o documento cujo campo de nickname e especificado
$set -> atualiza os campos "funcoes" e status "ativo" desse documento

*/
db.jogadores.updateOne(
    {nickname: "uZent"},
    { $set: {"funcoes": ["Sup Reserva"],
             "ativo": false
    }}
)

db.jogadores.updateOne(
    {nickname: "Boal"},
    { $set: {"funcoes": ["top laner Reserva"],
             "ativo": false
    }}
)

db.jogadores.updateOne(
    {nickname: "Mireu"},
    { $set: {"funcoes": ["Mid laner Reserva"],
             "ativo": false
    }}
)

// Atualizando agora com o Save:
/* 

Se o jogo com ID 9999 não existir, ele faz um insertOne. Se existir, faz um updateOne.

*/
db.jogos.updateOne(
    { _id: 9999 },
    { 
        $set: { 
            nome: "Counter-Strike 2", 
            genero: "FPS", 
            desenvolvedora: "Valve",
            plataformas: ["PC"] 
        } 
    },
    { upsert: true }
);





//Adicionado redes sociais novas na colecao "Organizacao":
/*

$addToset -> adiciona o elemento especificado no array de redes_sociais

*/
db.organizacoes.updateOne(
    {nome: "LOUD"},
    { $addToSet:{ redes_sociais: "Tiktok"}} //
)

db.organizacoes.updateOne(
    {nome: "FURIA"},
    { $addToSet:{ redes_sociais: "Tiktok"}}
)

db.organizacoes.updateOne(
    {nome: "paiN Gaming"},
    { $addToSet:{ redes_sociais: "Facebook"}}
)

// adicionado novo campo "pontuacao" para as equipes

db.equipes.updateOne(
    { nome: "LOUD LOL" },
    { $set: { pontuacao: 95 } }
)

db.equipes.updateOne(
    { nome: "FURIA CS" },
    { $set: { pontuacao: 88 } }
)

db.equipes.updateOne(
    { nome: "paiN LOL" },
    { $set: { pontuacao: 92 } }
)

db.equipes.updateOne(
    { nome: "VKS LOL" },
    { $set: { pontuacao: 85 } }
)

db.equipes.updateOne(
    { nome: "KBM Valorant" },
    { $set: { pontuacao: 78 } }
) 



// deletando alguns jogadores na colecao "jogadores":

db.jogadores.deleteOne(
    {nickname: "Robo" }
)

db.jogadores.deleteOne(
    {nickname: "Bull"}
)



//inserindo novos jogadores no lugar dos removidos:
db.jogadores.insertOne(
{
    _id: 140,
    nickname: "Marvin",
    nome_completo: "Vinicius de souza",
    salario: 42000,
    equipe_id: 3,
    funcoes: ["ADC"],
    estatisticas: { kills: 1030, deaths: 530, mvps: 11 },
    biografia: "Jogador prodigio com alto potencial no futuro.",
    ativo: true
}
)


db.jogadores.insertOne(
{
    _id: 40,
    nickname: "NinjaKiwi",
    nome_completo: "Yudi Leonardo Miyashiro",
    salario: 3200,
    equipe_id: 1,
    funcoes: ["ADC"],
    estatisticas: { kills: 450, deaths: 2000, mvps: 2 },
    biografia: "Jogador prodigio com alto potencial no futuro.",
    ativo: true
}
)

// Mudando o nome de da colecao "jogadores" para "atletas" para todos os ducumentos(RENAMEColletion):

/*
renameColletion -> altera o nome da colecao inteira

antes: jogadores

depois: atletas

os documentos permanecem os mesmos, apenas altera o nome da coleacao
*/

db.jogadores.renameCollection("atletas")
db.atletas.renameCollection("jogadores")



/*
use, updateone, $set, addtoset, save, remocao, renamecollection

 */

