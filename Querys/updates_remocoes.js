
//alterando salário d

use ("plataforma_esports")





// Alterando o status de um jogador em especifico usando o comando $set

db.jogadores.updateOne(
    {nickname: "Robo"},
    { $set: {"funcoes": ["top laner Reserva"],
             "ativo": false
    }}
   


)   

