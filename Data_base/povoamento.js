// Definicao do nosso Banco de Dados

db = db.getSiblingDB("plataforma_esports")

db.organizacoes.drop()
db.jogos.drop()
db.equipes.drop()
db.jogadores.drop()
db.patrocinadores.drop()
db.contratos.drop()



// povoando a colecao de organizacoes --> total de 5 organizacoes

db.organizacoes.insertMany([
    {
        _id: 1010,
        nome: "LOUD",
        cnpj: "51111111001014",
        ano_fundacao: 2019,
        valor_mercado: 50000000.00,
        sede: {cidade: "Sao Paulo", pais: "Brasil"}, //aninhamento de objetos
        redes_sociais: ["Instagram", "Twitter", "Youtube"]
    },

    {
        _id: 1111,
        nome: "FURIA",
        cnpj: "11113310010156",
        valor_mercado: 50050500.00,
        ano_fundacao: 2017,
        sede: {cidade: "Uberlandia",pais: "Brasil"},
        redes_sociais: ["Instagram", "Youtube", "Facebook", "Telegram", "Discord"]
    },

    {
        _id: 1212,
        nome: "paiN Gaming",
        cnpj: "11551110014247",
        valor_mercado: 60000000.00,
        ano_fundacao: 2010,
        sede: { cidade: "Sao Paulo",pais: "Brasil"},
        redes_sociais: ["Instagram"]
    },

    {
        _id: 1313,
        nome: "Vivo Keyd Stars",
        cnpj: "22111110010158",
        valor_mercado: 80000000.00,
        ano_fundacao: 2013,
        sede: {cidade: "Sao Paulo",pais: "Brasil"},
        redes_sociais: ["Instagram", "Twitter", "Youtube", "Facebook"]
    },

    {
        _id: 1515,
        nome: "Kabum e-Sports",
        cnpj: "15511110010149",
        valor_mercado: 80887004.00,
        ano_fundacao: 2000,
        sede: {cidade: "Limeira", pais: "Brasil"},
        redes_sociais: ["Instagram", "Youtube"]
    }
])



// povoando a colecao de jogos --> total de 3 tipos de jogos (LOL, valorant e CS2)

db.jogos.insertMany([
    {
        _id: 111,
        nome: "League of Legends",
        genero: "MOBA",
        desenvolvedora: "Riot Games",
        data_lancamento: ISODate("2009-10-27"),
        plataformas: ["Windows", "MAcOS"]
    },

    {
        _id: 222,
        nome: "Valorant",
        genero: "FPS",
        desenvolvedora: "Riot Games",
        data_lancamento: ISODate("2020-06-02"),
        plataformas: ["Windows", "PlayStation 5", "Xbox X/S"]
    },

    {
        _id: 333,
        nome: "Counter-Strike 2",
        genero: "FPS",
        desenvolvedora: "Valve Corporation",
        data_lancamento: ISODate("2023-09-27"),
        plataformas: ["Windows", "Linux", "SteamOS"]
    }
])



// povoando a colecao de equipes --> total de 5 equipes(loud lol, furia cs, pain lol, t1 lol e tl vava)

db.equipes.insertMany([
    {
        _id: 1,
        nome: "LOUD LOL",
        organizacao_id: 1010, 
        jogo_id: 111,
        orcamento_anual: 1200000,
        ativa: true,
        conquistas: ["CBLOL 2022.2", "CBLOL 2023.1", "CBLOL 2023.2", "CBLOL 2024.1"]
    },

    {
        _id: 2,
        nome: "FURIA CS",
        organizacao_id: 1111,
        jogo_id: 333,
        orcamento_anual: 1800000,
        ativa: true,
        conquistas: ["EMF CS:GO World Invitational 2019", "Arctic Invitational 2019", "Elisa Masters Espoo 2023"]
        
    },

    {
        _id: 3,
        nome: "paiN LOL",
        organizacao_id: 1212,
        jogo_id: 111,
        orcamento_anual: 1400000,
        ativa: true,
        conquistas: ["CBLOL 2013", "CBLOL 2015.2", "CBLOL 2021.1", "CBLOL 2024.2"]
    },

    {
        _id: 4,
        nome: "VKS LOL",
        organizacao_id: 1313,
        jogo_id: 111,
        orcamento_anual: 5000000,
        ativa: true,
        conquistas: ["CBLOL 2014", "Rift Rivals 2017"]
    },

    {
        _id: 5,
        nome: "KBM Valorant",
        organizacao_id: 1515,
        jogo_id: 222,
        orcamento_anual: 2200000,
        ativa: true,
        conquistas:  []
    }
])



// povoando a colecao de jogadores

db.jogadores.insertMany([

    // Loud lol
    {
    _id: 10,
    nickname: "xyno",
    nome_completo: "Carlos Felipe Ferreira",
    salario: 35000,
    equipe_id: 1,
    funcoes: ["Top Lane"],
    estatisticas: { kills: 820, deaths: 510, mvps: 8 },
    biografia: "Top laner da LOUD e um dos destaques da nova geração do CBLOL.",
    ativo: true
},
   {
    _id: 20,
    nickname: "YoungJae",
    nome_completo: "Ko Yeong-jae",
    salario: 32000,
    equipe_id: 1,
    funcoes: ["Jungle"],
    estatisticas: { kills: 450, deaths: 380, mvps: 6 },
    biografia: "Caçador sul-coreano da LOUD conhecido pelo controle de objetivos.",
    ativo: true
},
    {
    _id: 30,
    nickname: "Envy",
    nome_completo: "Bruno Farias",
    salario: 40000,
    equipe_id: 1,
    funcoes: ["Mid Lane"],
    estatisticas: { kills: 910, deaths: 470, mvps: 12 },
    biografia: "Mid laner brasileiro da LOUD com estilo agressivo e foco em carry.",
    ativo: true
},

    {
    _id: 40,
    nickname: "Bull",
    nome_completo: "Song Seon-gyu",
    salario: 30000,
    equipe_id: 1,
    funcoes: ["ADC"],
    estatisticas: { kills: 1050, deaths: 420, mvps: 10 },
    biografia: "Atirador sul-coreano da LOUD conhecido pela consistência em teamfights.",
    ativo: true
},

    {
    _id: 50,
    nickname: "uZent",
    nome_completo: "Matheus Ferreira",
    salario: 28000,
    equipe_id: 1,
    funcoes: ["Support"],
    estatisticas: { kills: 140, deaths: 390, mvps: 4 },
    biografia: "Suporte da LOUD especializado em iniciações e proteção da equipe.",
    ativo: true
},


    // Furia CS
    {
    _id: 60,
    nickname: "FalleN",
    nome_completo: "Gabriel Toledo",
    salario: 60000,
    equipe_id: 2,
    funcoes: ["IGL", "AWPer"],
    estatisticas: { kills: 18500, deaths: 14200, mvps: 35 },
    biografia: "Lenda do Counter-Strike brasileiro e capitão da FURIA CS2."
,
    ativo: true
},

    {
    _id: 70,
    nickname: "KSCERATO",
    nome_completo: "Kaike Cerato",
    salario: 58000,
    equipe_id: 2,
    funcoes: ["Rifler"],
    estatisticas: { kills: 11200, deaths: 7600, mvps: 28 },
    biografia: "Principal estrela da FURIA e um dos melhores riflers do mundo.",
    ativo: true
},

    {
    _id: 80,
    nickname: "yuurih",
    nome_completo: "Yuri Santos",
    salario: 55000,
    equipe_id: 2,
    funcoes: ["Support", "Rifler"],
    estatisticas: { kills: 9800, deaths: 7300, mvps: 20 },
    biografia: "Jogador histórico da FURIA conhecido pela regularidade.",
    ativo: true
},

    {
    _id: 90,
    nickname: "YEKINDAR",
    nome_completo: "Mareks Galinskis",
    salario: 35000,
    equipe_id: 2,
    funcoes: ["Entry Fragger"],
    estatisticas: { kills: 8900, deaths: 7100, mvps: 18 },
    biografia: "Jogador letão famoso pelo estilo extremamente agressivo.",
    ativo: true
},

    {
    _id: 100,
    nickname: "molodoy",
    nome_completo: "Danil Golubenko",
    salario: 30000,
    equipe_id: 2,
    funcoes: ["AWPer"],
    estatisticas: { kills: 3400, deaths: 2500, mvps: 7 },
    biografia: "AWPer cazaque contratado para a nova fase internacional da FURIA.",
    ativo: true
},

 
    // paiN lol
    {
    _id: 110,
    nickname: "Boal",
    nome_completo: "Felipe Boal",
    salario: 32000,
    equipe_id: 3,
    funcoes: ["Top Lane"],
    estatisticas: { kills: 760, deaths: 500, mvps: 5 },
    biografia: "Top laner brasileiro da paiN Gaming.",
    ativo: true
},

    {   
    _id: 120,
    nickname: "CarioK",
    nome_completo: "Marcos Santos de Oliveira Junior",
    salario: 34000,
    equipe_id: 3,
    funcoes: ["Jungle"],
    estatisticas: { kills: 510, deaths: 420, mvps: 7 },
    biografia: "Caçador da paiN Gaming conhecido pelo controle de mapa e um grande pipoqueiro.",
    ativo: true
},

    {
    _id: 130,
    nickname: "Keine",
    nome_completo: "Kim Joon-cheol",
    salario: 45000,
    equipe_id: 3,
    funcoes: ["Mid Lane"],
    estatisticas: { kills: 980, deaths: 480, mvps: 9 },
    biografia: "Mid laner sul-coreano da paiN Gaming .",
    ativo: true
},

    {
    _id: 140,
    nickname: "Robo",
    nome_completo: "Leonardo Souza",
    salario: 42000,
    equipe_id: 3,
    funcoes: ["ADC"],
    estatisticas: { kills: 1030, deaths: 530, mvps: 11 },
    biografia: "Veterano multicampeão brasileiro atuando na paiN Gaming.",
    ativo: true
},

    {
    _id: 150,
    nickname: "Kuri",
    nome_completo: "Choi Won-yeong",
    salario: 28000,
    equipe_id: 3,
    funcoes: ["Support"],
    estatisticas: { kills: 180, deaths: 410, mvps: 3 },
    biografia: "Suporte sul-coreano da paiN Gaming.",
    ativo: true
},

    // VKS LOL

    {
    _id: 160,
    nickname: "ZekaS",
    nome_completo: "César Berteli França",
    salario: 70000,
    equipe_id: 4,
    funcoes: ["Top Lane"],
    estatisticas: { kills: 850, deaths: 520, mvps: 8 },
    biografia: "Top laner brasileiro da Vivo Keyd Stars.",
    ativo: true
},

    {
    _id: 170,
    nickname: "Disamis",
    nome_completo: "Pedro Arthur Gonçalves",
    salario: 65000,
    equipe_id: 4,
    funcoes: ["Jungle"],
    estatisticas: { kills: 620, deaths: 430, mvps: 10 },
    biografia: "Jungler brasileiro da Vivo Keyd Stars e destaque da equipe.",
    ativo: true
},

    {
    _id: 180,
    nickname: "Mireu",
    nome_completo: "Jeong Jo-bin",
    salario: 120000,
    equipe_id: 4,
    funcoes: ["Mid Lane"],
    estatisticas: { kills: 1100, deaths: 500, mvps: 15 },
    biografia: "Mid laner sul-coreano da Vivo Keyd Stars e principal estrela da equipe.",
    ativo: true
},

    {
    _id: 190,
    nickname: "ceo",
    nome_completo: "Mauro Lorenzo Tévez",
    salario: 70000,
    equipe_id: 4,
    funcoes: ["ADC"],
    estatisticas: { kills: 1200, deaths: 470, mvps: 12 },
    biografia: "Atirador argentino da Vivo Keyd Stars.",
    ativo: true
},

    {
    _id: 200,
    nickname: "scamber",
    nome_completo: "Pedro Lemos Soares Maximiniano",
    salario: 68000,
    equipe_id: 4,
    funcoes: ["Support"],
    estatisticas: { kills: 180, deaths: 390, mvps: 4 },
    biografia: "Suporte brasileiro da Vivo Keyd Stars.",
    ativo: true
},

    // KBM vava

 {
    _id: 210,
    nickname: "nAts",
    nome_completo: "Ayaz Akhmetshin",
    salario: 50000,
    equipe_id: 5,
    funcoes: ["Sentinela"],
    estatisticas: { kills: 5200, deaths: 4100, mvps: 14 },
    biografia: "Jogador profissional de Valorant conhecido por seu excelente posicionamento defensivo.",
    ativo: true
},

{
    _id: 220,
    nickname: "MiniBoo",
    nome_completo: "Dominikas Lukavicius",
    salario: 48000,
    equipe_id: 5,
    funcoes: ["Duelista"],
    estatisticas: { kills: 4900, deaths: 4200, mvps: 12 },
    biografia: "Duelista europeu reconhecido pela agressividade e alto poder de entrada.",
    ativo: true
},

{
    _id: 230,
    nickname: "purp0",
    nome_completo: "Semyon Borchev",
    salario: 47000,
    equipe_id: 5,
    funcoes: ["Flex", "Iniciador"],
    estatisticas: { kills: 4500, deaths: 3800, mvps: 10 },
    biografia: "Jogador flexível capaz de atuar em múltiplas funções dentro do time.",
    ativo: true
},

{
    _id: 240,
    nickname: "kamo",
    nome_completo: "Kamil Fraczkowiak",
    salario: 45000,
    equipe_id: 5,
    funcoes: ["Iniciador"],
    estatisticas: { kills: 4300, deaths: 3900, mvps: 9 },
    biografia: "Iniciador conhecido pela criação de espaço e suporte tático à equipe.",
    ativo: true
},

{
    _id: 250,
    nickname: "wayne",
    nome_completo: "Wayne Chang Wei Jie",
    salario: 46000,
    equipe_id: 5,
    funcoes: ["Controlador"],
    estatisticas: { kills: 4100, deaths: 3700, mvps: 8 },
    biografia: "Controlador experiente com foco em utilitários e domínio de mapa.",
    ativo: true
}
  
])



// povoando a colecao de patrocinadores

db.patrocinadores.insertMany([
    {
        _id: 100000,
        empresa: "Red Bull",
        segmento: "Bebidas",
        sede_mundial: "Austria",
        global: true,
        site_oficial: "www.redbull.com"
        
    },

    {
        _id: 200000,
        empresa: "Intel",
        segmento: "Hardware",
        sede_mundial: "Estados Unidos",
        global: true,
        site_oficial: "www.intel.com"

    },

    {
        _id: 300000,
        empresa: "Logitech",
        segmento: "Perifericos",
        sede_mundial: "Suica",
        global: true,
        site_oficial: "www.logitech.com"
        
    },

    {
        _id: 400000,
        empresa: "Samsung",
        segmento: "Eletronicos",
        sede_mundial: "Coreia do Sul",
        global: true,
        site_oficial: "www.samsung.com"
        
    },

    {
        _id: 500000,
        empresa: "HyperX",
        segmento: "Perifericos Gamer",
        sede_mundial: "Estados Unidos",
        global: true,
        site_oficial: "www.HyperX.com"
        
    }
])



// povoando a colecao de contratos

db.contratos.insertMany([
    {
        _id: 1111,
        patrocinador_id: 100000,
        equipe_id: 1,
        valor_mensal: 500000,
        vigencia: {
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 2222,
        patrocinador_id: 200000,
        equipe_id: 1,
        valor_mensal: 700000,
        vigencia: {
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2027-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 3333,
        patrocinador_id: 100000,
        equipe_id: 2,
        valor_mensal: 650000,
        vigencia: {
        inicio: ISODate("2025-02-01"),
        fim: ISODate("2027-01-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 4444,
        patrocinador_id: 300000,
        equipe_id: 2,
        valor_mensal: 450000,
        vigencia: {
        inicio: ISODate("2025-02-01"),
        fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 5555,
        patrocinador_id: 200000,
        equipe_id: 3,
        valor_mensal: 550000,
        vigencia: {
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2027-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 6666,
        patrocinador_id: 500000,
        equipe_id: 3,
        valor_mensal: 350000,
        vigencia: {
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 7777,
        patrocinador_id: 100000,
        equipe_id: 4,
        valor_mensal: 1200000,
        vigencia: {
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2028-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 8888,
        patrocinador_id: 400000,
        equipe_id: 4,
        valor_mensal: 900000,
        vigencia: {
        inicio: ISODate("2025-03-01"),
        fim: ISODate("2027-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 9999,
        patrocinador_id: 300000,
        equipe_id: 5,
        valor_mensal: 500000,
        vigencia: {
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: true
    },

    {
        _id: 10101,
        patrocinador_id: 500000,
        equipe_id: 5,
        valor_mensal: 650000,
        vigencia: {
        inicio: ISODate("2025-02-01"),
        fim: ISODate("2027-12-31")
        },
        clausula_rescisoria: true
    }
])


// povoamento concluito 