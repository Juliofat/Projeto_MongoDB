// Definicao do nosso Banco de Dados

db = db.getSiblingDB("plataforma_esports")

db.organizacoes.drop()
db.jogos.drop()
db.equipes.drop()
db.jogadores.drop()
db.patrocinadores.drop()
db.contratos.drop()
db.partidas.drop()



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


// ─── EXPANSÃO DO BANCO ───────────────────────────────────────────────────────

// 3 novas organizações
db.organizacoes.insertMany([
    {
        _id: 1616,
        nome: "INTZ",
        cnpj: "16161610010161",
        valor_mercado: 30000000.00,
        ano_fundacao: 2012,
        sede: { cidade: "São Paulo", pais: "Brasil" },
        redes_sociais: ["Instagram", "Twitter", "Youtube", "Facebook"]
    },
    {
        _id: 1717,
        nome: "Fluxo",
        cnpj: "17171710010172",
        valor_mercado: 25000000.00,
        ano_fundacao: 2021,
        sede: { cidade: "Rio de Janeiro", pais: "Brasil" },
        redes_sociais: ["Instagram", "Youtube", "Tiktok"]
    },
    {
        _id: 1818,
        nome: "MIBR",
        cnpj: "18181810010183",
        valor_mercado: 45000000.00,
        ano_fundacao: 2007,
        sede: { cidade: "São Paulo", pais: "Brasil" },
        redes_sociais: ["Instagram", "Twitter", "Youtube", "Facebook", "Discord"]
    }
])


// 2 novos jogos
db.jogos.insertMany([
    {
        _id: 444,
        nome: "Rainbow Six Siege",
        genero: "FPS Tático",
        desenvolvedora: "Ubisoft",
        data_lancamento: ISODate("2015-12-01"),
        plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S"]
    },
    {
        _id: 555,
        nome: "PUBG Mobile",
        genero: "Battle Royale",
        desenvolvedora: "Krafton",
        data_lancamento: ISODate("2018-03-19"),
        plataformas: ["Android", "iOS"]
    }
])


// 3 novas equipes
db.equipes.insertMany([
    {
        _id: 6,
        nome: "INTZ LOL",
        organizacao_id: 1616,
        jogo_id: 111,
        orcamento_anual: 900000,
        ativa: true,
        conquistas: ["CBLOL 2016.1", "CBLOL 2016.2", "CBLOL 2017.1"]
    },
    {
        _id: 7,
        nome: "Fluxo Valorant",
        organizacao_id: 1717,
        jogo_id: 222,
        orcamento_anual: 750000,
        ativa: true,
        conquistas: ["VCT Game Changers 2022"]
    },
    {
        _id: 8,
        nome: "MIBR CS",
        organizacao_id: 1818,
        jogo_id: 333,
        orcamento_anual: 2000000,
        ativa: true,
        conquistas: ["ESL One Cologne 2016", "ESL Pro League Season 5", "IEM Sydney 2018"]
    }
])


// 15 novos jogadores (5 por equipe nova)
db.jogadores.insertMany([

    // INTZ LOL (equipe_id: 6)
    {
        _id: 260,
        nickname: "Tay",
        nome_completo: "Thiago Sartori",
        salario: 18000,
        equipe_id: 6,
        funcoes: ["Top Lane"],
        estatisticas: { kills: 540, deaths: 480, mvps: 4 },
        biografia: "Top laner veterano da INTZ, referência da era clássica do CBLOL.",
        ativo: true
    },
    {
        _id: 270,
        nickname: "Revolta",
        nome_completo: "Gabriel Henud",
        salario: 22000,
        equipe_id: 6,
        funcoes: ["Jungle"],
        estatisticas: { kills: 610, deaths: 400, mvps: 7 },
        biografia: "Jungler brasileiro com passagem por times internacionais.",
        ativo: true
    },
    {
        _id: 280,
        nickname: "micaO",
        nome_completo: "Mateus Higa",
        salario: 20000,
        equipe_id: 6,
        funcoes: ["Mid Lane"],
        estatisticas: { kills: 720, deaths: 430, mvps: 6 },
        biografia: "Mid laner brasileiro conhecido pelo jogo consistente.",
        ativo: true
    },
    {
        _id: 290,
        nickname: "Ranger",
        nome_completo: "Rafael Knittel",
        salario: 19000,
        equipe_id: 6,
        funcoes: ["ADC"],
        estatisticas: { kills: 880, deaths: 460, mvps: 5 },
        biografia: "Atirador experiente com anos de CBLOL.",
        ativo: true
    },
    {
        _id: 300,
        nickname: "Jockster",
        nome_completo: "Pedro Mezenga",
        salario: 16000,
        equipe_id: 6,
        funcoes: ["Support"],
        estatisticas: { kills: 95, deaths: 350, mvps: 2 },
        biografia: "Suporte brasileiro focado em proteção e visão de mapa.",
        ativo: true
    },

    // Fluxo Valorant (equipe_id: 7)
    {
        _id: 310,
        nickname: "heat",
        nome_completo: "Gustavo Moura",
        salario: 38000,
        equipe_id: 7,
        funcoes: ["Duelista"],
        estatisticas: { kills: 6200, deaths: 4800, mvps: 18 },
        biografia: "Duelista agressivo, destaque da cena brasileira de Valorant.",
        ativo: true
    },
    {
        _id: 320,
        nickname: "aspas",
        nome_completo: "Erick Santos",
        salario: 42000,
        equipe_id: 7,
        funcoes: ["Duelista"],
        estatisticas: { kills: 7100, deaths: 4900, mvps: 22 },
        biografia: "Um dos melhores duelistas do mundo, ex-campeão do VCT Champions.",
        ativo: true
    },
    {
        _id: 330,
        nickname: "qck",
        nome_completo: "Lucas Oliveira",
        salario: 30000,
        equipe_id: 7,
        funcoes: ["Iniciador"],
        estatisticas: { kills: 4800, deaths: 4100, mvps: 11 },
        biografia: "Iniciador inteligente com excelente leitura de jogo.",
        ativo: true
    },
    {
        _id: 340,
        nickname: "frz",
        nome_completo: "Felipe Freitas",
        salario: 28000,
        equipe_id: 7,
        funcoes: ["Controlador"],
        estatisticas: { kills: 4200, deaths: 3900, mvps: 9 },
        biografia: "Controlador metódico e pilar tático da Fluxo.",
        ativo: true
    },
    {
        _id: 350,
        nickname: "havoc",
        nome_completo: "Andrei Pereira",
        salario: 26000,
        equipe_id: 7,
        funcoes: ["Sentinela"],
        estatisticas: { kills: 3900, deaths: 3700, mvps: 7 },
        biografia: "Sentinela defensivo que ancora os rounds finais da equipe.",
        ativo: true
    },

    // MIBR CS (equipe_id: 8)
    {
        _id: 360,
        nickname: "fer",
        nome_completo: "Fernando Alvarenga",
        salario: 55000,
        equipe_id: 8,
        funcoes: ["Entry Fragger"],
        estatisticas: { kills: 22000, deaths: 16500, mvps: 42 },
        biografia: "Lenda do CS brasileiro, conhecido pelo estilo explosivo.",
        ativo: true
    },
    {
        _id: 370,
        nickname: "dead",
        nome_completo: "Epitácio de Melo",
        salario: 50000,
        equipe_id: 8,
        funcoes: ["AWPer"],
        estatisticas: { kills: 19500, deaths: 15200, mvps: 38 },
        biografia: "AWPer clássico da MIBR com vasta experiência internacional.",
        ativo: true
    },
    {
        _id: 380,
        nickname: "brnz4n",
        nome_completo: "Bruno Mazucatto",
        salario: 40000,
        equipe_id: 8,
        funcoes: ["Rifler"],
        estatisticas: { kills: 12000, deaths: 9800, mvps: 25 },
        biografia: "Rifler consistente e nova geração da MIBR.",
        ativo: true
    },
    {
        _id: 390,
        nickname: "drop",
        nome_completo: "Lincoln Lau",
        salario: 38000,
        equipe_id: 8,
        funcoes: ["Rifler", "Support"],
        estatisticas: { kills: 10500, deaths: 8900, mvps: 19 },
        biografia: "Jogador versátil que equilibra rifle e suporte tático.",
        ativo: true
    },
    {
        _id: 400,
        nickname: "saffee",
        nome_completo: "Rafael Costa",
        salario: 45000,
        equipe_id: 8,
        funcoes: ["AWPer", "IGL"],
        estatisticas: { kills: 14200, deaths: 11000, mvps: 30 },
        biografia: "AWPer e IGL da MIBR, referência em liderança dentro do servidor.",
        ativo: true
    }
])


// 2 novos patrocinadores
db.patrocinadores.insertMany([
    {
        _id: 600000,
        empresa: "Razer",
        segmento: "Perifericos Gamer",
        sede_mundial: "Estados Unidos",
        global: true,
        site_oficial: "www.razer.com"
    },
    {
        _id: 700000,
        empresa: "Lenovo",
        segmento: "Hardware",
        sede_mundial: "China",
        global: true,
        site_oficial: "www.lenovo.com"
    }
])


// 6 novos contratos para as equipes novas
db.contratos.insertMany([
    {
        _id: 11111,
        patrocinador_id: 600000,
        equipe_id: 6,
        valor_mensal: 200000,
        vigencia: {
            inicio: ISODate("2025-01-01"),
            fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: false
    },
    {
        _id: 12121,
        patrocinador_id: 700000,
        equipe_id: 6,
        valor_mensal: 180000,
        vigencia: {
            inicio: ISODate("2025-03-01"),
            fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: false
    },
    {
        _id: 13131,
        patrocinador_id: 600000,
        equipe_id: 7,
        valor_mensal: 350000,
        vigencia: {
            inicio: ISODate("2025-01-01"),
            fim: ISODate("2027-06-30")
        },
        clausula_rescisoria: true
    },
    {
        _id: 14141,
        patrocinador_id: 400000,
        equipe_id: 7,
        valor_mensal: 280000,
        vigencia: {
            inicio: ISODate("2025-02-01"),
            fim: ISODate("2026-12-31")
        },
        clausula_rescisoria: true
    },
    {
        _id: 15151,
        patrocinador_id: 200000,
        equipe_id: 8,
        valor_mensal: 800000,
        vigencia: {
            inicio: ISODate("2025-01-01"),
            fim: ISODate("2028-12-31")
        },
        clausula_rescisoria: true
    },
    {
        _id: 16161,
        patrocinador_id: 600000,
        equipe_id: 8,
        valor_mensal: 600000,
        vigencia: {
            inicio: ISODate("2025-04-01"),
            fim: ISODate("2027-12-31")
        },
        clausula_rescisoria: true
    }
])


// ─── 25 JOGOS ADICIONAIS (total: 30) ─────────────────────────────────────────

db.jogos.insertMany([
    { _id: 1001, nome: "Dota 2",                      genero: "MOBA",          desenvolvedora: "Valve",                  data_lancamento: ISODate("2013-07-09"), plataformas: ["Windows", "MacOS", "Linux"] },
    { _id: 1002, nome: "Apex Legends",                genero: "FPS",           desenvolvedora: "Respawn Entertainment",  data_lancamento: ISODate("2019-02-04"), plataformas: ["Windows", "PlayStation 4", "Xbox One"] },
    { _id: 1003, nome: "Overwatch 2",                 genero: "FPS",           desenvolvedora: "Blizzard Entertainment", data_lancamento: ISODate("2022-10-04"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S"] },
    { _id: 1004, nome: "Fortnite",                    genero: "Battle Royale", desenvolvedora: "Epic Games",             data_lancamento: ISODate("2017-07-25"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S", "Nintendo Switch"] },
    { _id: 1005, nome: "Street Fighter 6",            genero: "Luta",          desenvolvedora: "Capcom",                 data_lancamento: ISODate("2023-06-02"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox X/S"] },
    { _id: 1006, nome: "Tekken 8",                    genero: "Luta",          desenvolvedora: "Bandai Namco",           data_lancamento: ISODate("2024-01-26"), plataformas: ["Windows", "PlayStation 5", "Xbox X/S"] },
    { _id: 1007, nome: "Rocket League",               genero: "Esportes",      desenvolvedora: "Psyonix",                data_lancamento: ISODate("2015-07-07"), plataformas: ["Windows", "PlayStation 4", "Xbox One", "Nintendo Switch"] },
    { _id: 1008, nome: "EA FC 24",                    genero: "Esportes",      desenvolvedora: "EA Sports",              data_lancamento: ISODate("2023-09-29"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S"] },
    { _id: 1009, nome: "StarCraft II",                genero: "Estrategia",    desenvolvedora: "Blizzard Entertainment", data_lancamento: ISODate("2010-07-27"), plataformas: ["Windows", "MacOS"] },
    { _id: 1010, nome: "Hearthstone",                 genero: "Card Game",     desenvolvedora: "Blizzard Entertainment", data_lancamento: ISODate("2014-03-11"), plataformas: ["Windows", "MacOS", "Android", "iOS"] },
    { _id: 1011, nome: "Clash Royale",                genero: "Card Game",     desenvolvedora: "Supercell",              data_lancamento: ISODate("2016-03-02"), plataformas: ["Android", "iOS"] },
    { _id: 1012, nome: "Brawl Stars",                 genero: "Acao",          desenvolvedora: "Supercell",              data_lancamento: ISODate("2018-12-12"), plataformas: ["Android", "iOS"] },
    { _id: 1013, nome: "Mobile Legends: Bang Bang",   genero: "MOBA",          desenvolvedora: "Moonton",                data_lancamento: ISODate("2016-07-14"), plataformas: ["Android", "iOS"] },
    { _id: 1014, nome: "Free Fire",                   genero: "Battle Royale", desenvolvedora: "Garena",                 data_lancamento: ISODate("2017-09-30"), plataformas: ["Android", "iOS"] },
    { _id: 1015, nome: "PUBG: Battlegrounds",         genero: "Battle Royale", desenvolvedora: "Krafton",                data_lancamento: ISODate("2017-12-20"), plataformas: ["Windows", "PlayStation 4", "Xbox One"] },
    { _id: 1016, nome: "Warzone 2.0",                 genero: "Battle Royale", desenvolvedora: "Activision",             data_lancamento: ISODate("2022-11-16"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S"] },
    { _id: 1017, nome: "Halo Infinite",               genero: "FPS",           desenvolvedora: "343 Industries",         data_lancamento: ISODate("2021-12-08"), plataformas: ["Windows", "Xbox One", "Xbox X/S"] },
    { _id: 1018, nome: "Call of Duty: MW III",        genero: "FPS",           desenvolvedora: "Activision",             data_lancamento: ISODate("2023-11-10"), plataformas: ["Windows", "PlayStation 5", "Xbox X/S"] },
    { _id: 1019, nome: "Dragon Ball FighterZ",        genero: "Luta",          desenvolvedora: "Arc System Works",       data_lancamento: ISODate("2018-01-26"), plataformas: ["Windows", "PlayStation 4", "Xbox One", "Nintendo Switch"] },
    { _id: 1020, nome: "Super Smash Bros. Ultimate",  genero: "Luta",          desenvolvedora: "Sora Ltd.",              data_lancamento: ISODate("2018-12-07"), plataformas: ["Nintendo Switch"] },
    { _id: 1021, nome: "NBA 2K24",                    genero: "Esportes",      desenvolvedora: "Visual Concepts",        data_lancamento: ISODate("2023-09-08"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S"] },
    { _id: 1022, nome: "F1 23",                       genero: "Corrida",       desenvolvedora: "Codemasters",            data_lancamento: ISODate("2023-06-16"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox X/S"] },
    { _id: 1023, nome: "Age of Empires IV",           genero: "Estrategia",    desenvolvedora: "Relic Entertainment",    data_lancamento: ISODate("2021-10-28"), plataformas: ["Windows"] },
    { _id: 1024, nome: "Genshin Impact",              genero: "RPG",           desenvolvedora: "miHoYo",                 data_lancamento: ISODate("2020-09-28"), plataformas: ["Windows", "PlayStation 4", "PlayStation 5", "Android", "iOS"] },
    { _id: 1025, nome: "Teamfight Tactics",           genero: "Auto Chess",    desenvolvedora: "Riot Games",             data_lancamento: ISODate("2019-06-26"), plataformas: ["Windows", "MacOS", "Android", "iOS"] }
])


// ─── NOVOS PATROCINADORES ─────────────────────────────────────────────────────

db.patrocinadores.insertMany([
    { _id: 800000,  empresa: "NVIDIA",         segmento: "Hardware",            sede_mundial: "Estados Unidos", global: true, site_oficial: "www.nvidia.com" },
    { _id: 900000,  empresa: "AMD",             segmento: "Hardware",            sede_mundial: "Estados Unidos", global: true, site_oficial: "www.amd.com" },
    { _id: 1000000, empresa: "MSI",             segmento: "Hardware",            sede_mundial: "Taiwan",         global: true, site_oficial: "www.msi.com" },
    { _id: 1100000, empresa: "ASUS ROG",        segmento: "Hardware Gamer",      sede_mundial: "Taiwan",         global: true, site_oficial: "rog.asus.com" },
    { _id: 1200000, empresa: "Corsair",         segmento: "Perifericos Gamer",   sede_mundial: "Estados Unidos", global: true, site_oficial: "www.corsair.com" },
    { _id: 1300000, empresa: "SteelSeries",     segmento: "Perifericos Gamer",   sede_mundial: "Dinamarca",      global: true, site_oficial: "www.steelseries.com" },
    { _id: 1400000, empresa: "BenQ",            segmento: "Monitores",           sede_mundial: "Taiwan",         global: true, site_oficial: "www.benq.com" },
    { _id: 1500000, empresa: "Secretlab",       segmento: "Cadeiras Gamer",      sede_mundial: "Singapura",      global: true, site_oficial: "www.secretlab.co" },
    { _id: 1600000, empresa: "Monster Energy",  segmento: "Bebidas",             sede_mundial: "Estados Unidos", global: true, site_oficial: "www.monsterenergy.com" },
    { _id: 1700000, empresa: "G-Fuel",          segmento: "Bebidas",             sede_mundial: "Estados Unidos", global: true, site_oficial: "www.gfuel.com" },
    { _id: 1800000, empresa: "Mastercard",      segmento: "Servicos Financeiros",sede_mundial: "Estados Unidos", global: true, site_oficial: "www.mastercard.com" },
    { _id: 1900000, empresa: "Puma",            segmento: "Vestuario Esportivo", sede_mundial: "Alemanha",       global: true, site_oficial: "www.puma.com" },
    { _id: 2000000, empresa: "Nike",            segmento: "Vestuario Esportivo", sede_mundial: "Estados Unidos", global: true, site_oficial: "www.nike.com" },
    { _id: 2100000, empresa: "Adidas",          segmento: "Vestuario Esportivo", sede_mundial: "Alemanha",       global: true, site_oficial: "www.adidas.com" },
    { _id: 2200000, empresa: "Mercedes-Benz",   segmento: "Automotivo",          sede_mundial: "Alemanha",       global: true, site_oficial: "www.mercedes-benz.com" }
])


// ─── NOVOS CONTRATOS ─────────────────────────────────────────────────────────

db.contratos.insertMany([
    { _id: 17171, patrocinador_id: 800000,  equipe_id: 1, valor_mensal: 900000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2027-12-31") }, clausula_rescisoria: true },
    { _id: 18181, patrocinador_id: 1100000, equipe_id: 1, valor_mensal: 750000,  vigencia: { inicio: ISODate("2025-02-01"), fim: ISODate("2027-01-31") }, clausula_rescisoria: true },
    { _id: 19191, patrocinador_id: 1600000, equipe_id: 2, valor_mensal: 400000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2026-12-31") }, clausula_rescisoria: false },
    { _id: 20202, patrocinador_id: 900000,  equipe_id: 2, valor_mensal: 850000,  vigencia: { inicio: ISODate("2025-03-01"), fim: ISODate("2028-02-28") }, clausula_rescisoria: true },
    { _id: 21212, patrocinador_id: 1500000, equipe_id: 3, valor_mensal: 300000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2026-12-31") }, clausula_rescisoria: false },
    { _id: 22222, patrocinador_id: 1800000, equipe_id: 3, valor_mensal: 600000,  vigencia: { inicio: ISODate("2025-04-01"), fim: ISODate("2027-03-31") }, clausula_rescisoria: true },
    { _id: 23232, patrocinador_id: 1000000, equipe_id: 4, valor_mensal: 700000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2027-12-31") }, clausula_rescisoria: true },
    { _id: 24242, patrocinador_id: 2000000, equipe_id: 4, valor_mensal: 1100000, vigencia: { inicio: ISODate("2025-02-01"), fim: ISODate("2028-01-31") }, clausula_rescisoria: true },
    { _id: 25252, patrocinador_id: 1300000, equipe_id: 5, valor_mensal: 450000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2026-12-31") }, clausula_rescisoria: false },
    { _id: 26262, patrocinador_id: 2100000, equipe_id: 5, valor_mensal: 380000,  vigencia: { inicio: ISODate("2025-03-01"), fim: ISODate("2027-02-28") }, clausula_rescisoria: true },
    { _id: 27272, patrocinador_id: 1400000, equipe_id: 6, valor_mensal: 250000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2026-06-30") }, clausula_rescisoria: false },
    { _id: 28282, patrocinador_id: 1700000, equipe_id: 6, valor_mensal: 200000,  vigencia: { inicio: ISODate("2025-02-01"), fim: ISODate("2026-12-31") }, clausula_rescisoria: false },
    { _id: 29292, patrocinador_id: 1200000, equipe_id: 7, valor_mensal: 420000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2027-12-31") }, clausula_rescisoria: true },
    { _id: 30303, patrocinador_id: 2200000, equipe_id: 7, valor_mensal: 950000,  vigencia: { inicio: ISODate("2025-05-01"), fim: ISODate("2028-04-30") }, clausula_rescisoria: true },
    { _id: 31313, patrocinador_id: 1900000, equipe_id: 8, valor_mensal: 500000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2027-12-31") }, clausula_rescisoria: true },
    { _id: 32323, patrocinador_id: 800000,  equipe_id: 8, valor_mensal: 1050000, vigencia: { inicio: ISODate("2025-03-01"), fim: ISODate("2028-12-31") }, clausula_rescisoria: true },
    { _id: 33333, patrocinador_id: 1600000, equipe_id: 1, valor_mensal: 320000,  vigencia: { inicio: ISODate("2025-06-01"), fim: ISODate("2026-05-31") }, clausula_rescisoria: false },
    { _id: 34343, patrocinador_id: 1700000, equipe_id: 2, valor_mensal: 280000,  vigencia: { inicio: ISODate("2025-01-01"), fim: ISODate("2026-12-31") }, clausula_rescisoria: false },
    { _id: 35353, patrocinador_id: 2200000, equipe_id: 3, valor_mensal: 800000,  vigencia: { inicio: ISODate("2025-02-01"), fim: ISODate("2028-01-31") }, clausula_rescisoria: true },
    { _id: 36363, patrocinador_id: 1800000, equipe_id: 8, valor_mensal: 700000,  vigencia: { inicio: ISODate("2025-04-01"), fim: ISODate("2027-03-31") }, clausula_rescisoria: true }
])


// ─── NOVAS EQUIPES ────────────────────────────────────────────────────────────
// LOL: +4 | CS: +4 | Valorant: +4 | Free Fire: +2  →  total: 22 equipes

db.equipes.insertMany([
    // LoL
    { _id: 9,  nome: "Fluxo LOL",        organizacao_id: 1717, jogo_id: 111,  orcamento_anual: 600000,  ativa: true, conquistas: [] },
    { _id: 10, nome: "KBM LOL",          organizacao_id: 1515, jogo_id: 111,  orcamento_anual: 700000,  ativa: true, conquistas: [] },
    { _id: 11, nome: "FURIA LOL",        organizacao_id: 1111, jogo_id: 111,  orcamento_anual: 1000000, ativa: true, conquistas: ["CBLOL 2024.1"] },
    { _id: 12, nome: "MIBR LOL",         organizacao_id: 1818, jogo_id: 111,  orcamento_anual: 800000,  ativa: true, conquistas: [] },
    // CS
    { _id: 13, nome: "paiN CS",          organizacao_id: 1212, jogo_id: 333,  orcamento_anual: 1200000, ativa: true, conquistas: ["BetBoom Dach 2024"] },
    { _id: 14, nome: "LOUD CS",          organizacao_id: 1010, jogo_id: 333,  orcamento_anual: 900000,  ativa: true, conquistas: [] },
    { _id: 15, nome: "INTZ CS",          organizacao_id: 1616, jogo_id: 333,  orcamento_anual: 600000,  ativa: true, conquistas: [] },
    { _id: 16, nome: "VKS CS",           organizacao_id: 1313, jogo_id: 333,  orcamento_anual: 1100000, ativa: true, conquistas: ["ESL Challenger 2024"] },
    // Valorant
    { _id: 17, nome: "LOUD Valorant",    organizacao_id: 1010, jogo_id: 222,  orcamento_anual: 950000,  ativa: true, conquistas: ["VCT Brasil 2024 S1"] },
    { _id: 18, nome: "FURIA Valorant",   organizacao_id: 1111, jogo_id: 222,  orcamento_anual: 1100000, ativa: true, conquistas: ["VCT Brasil 2023 S2"] },
    { _id: 19, nome: "paiN Valorant",    organizacao_id: 1212, jogo_id: 222,  orcamento_anual: 800000,  ativa: true, conquistas: [] },
    { _id: 20, nome: "MIBR Valorant",    organizacao_id: 1818, jogo_id: 222,  orcamento_anual: 700000,  ativa: true, conquistas: [] },
    // Free Fire
    { _id: 21, nome: "LOUD Free Fire",   organizacao_id: 1010, jogo_id: 1014, orcamento_anual: 400000,  ativa: true, conquistas: ["LBFF 2024 S1", "LBFF 2024 S2"] },
    { _id: 22, nome: "FURIA Free Fire",  organizacao_id: 1111, jogo_id: 1014, orcamento_anual: 350000,  ativa: true, conquistas: ["LBFF 2023 S1"] }
])


// ─── JOGADORES DAS NOVAS EQUIPES ──────────────────────────────────────────────

db.jogadores.insertMany([

    // Fluxo LOL (equipe_id: 9)
    { _id: 410, nickname: "TitaN",    nome_completo: "Rafael Titan Souza",      salario: 20000, equipe_id: 9,  funcoes: ["Top Lane"],  estatisticas: { kills: 640, deaths: 490, mvps: 5 }, biografia: "Top laner da Fluxo com jogo sólido.",           ativo: true },
    { _id: 420, nickname: "Grevthar", nome_completo: "Samuel Grevthar Lima",    salario: 22000, equipe_id: 9,  funcoes: ["Mid Lane"],  estatisticas: { kills: 780, deaths: 440, mvps: 7 }, biografia: "Mid laner agressivo da Fluxo LOL.",             ativo: true },
    { _id: 430, nickname: "Wiz",      nome_completo: "Pedro Wiz Machado",       salario: 19000, equipe_id: 9,  funcoes: ["ADC"],       estatisticas: { kills: 850, deaths: 460, mvps: 6 }, biografia: "Atirador da Fluxo conhecido pelo alcance.",    ativo: true },

    // KBM LOL (equipe_id: 10)
    { _id: 440, nickname: "Guigo",    nome_completo: "Guilherme Ruiz",          salario: 21000, equipe_id: 10, funcoes: ["Mid Lane"],  estatisticas: { kills: 820, deaths: 470, mvps: 8 }, biografia: "Mid laner da KBM, ex-jogador da paiN.",        ativo: true },
    { _id: 450, nickname: "Damage",   nome_completo: "Lucas Damage Silva",      salario: 18000, equipe_id: 10, funcoes: ["ADC"],       estatisticas: { kills: 900, deaths: 480, mvps: 6 }, biografia: "Atirador consistente da KBM LOL.",             ativo: true },
    { _id: 460, nickname: "FNb",      nome_completo: "Felipe nB Borges",        salario: 16000, equipe_id: 10, funcoes: ["Support"],   estatisticas: { kills: 110, deaths: 360, mvps: 3 }, biografia: "Suporte brasileiro experiente da KBM.",        ativo: true },

    // FURIA LOL (equipe_id: 11)
    { _id: 470, nickname: "Tatu",     nome_completo: "Gabriel Tatu Freitas",    salario: 28000, equipe_id: 11, funcoes: ["Jungle"],    estatisticas: { kills: 670, deaths: 410, mvps: 9 }, biografia: "Jungler da FURIA LOL referência em objetivos.",ativo: true },
    { _id: 480, nickname: "Smiley",   nome_completo: "Kim Sung-jin",            salario: 35000, equipe_id: 11, funcoes: ["Mid Lane"],  estatisticas: { kills: 950, deaths: 490, mvps: 11},  biografia: "Mid laner coreano contratado pela FURIA.",    ativo: true },
    { _id: 490, nickname: "Tutsz",    nome_completo: "Arthur Tutsz Andrade",    salario: 25000, equipe_id: 11, funcoes: ["ADC"],       estatisticas: { kills: 1010, deaths: 500, mvps: 10}, biografia: "Atirador brasileiro destaque do CBLOL.",       ativo: true },

    // MIBR LOL (equipe_id: 12)
    { _id: 500, nickname: "Brance",   nome_completo: "Caio Brance Alves",       salario: 22000, equipe_id: 12, funcoes: ["Top Lane"],  estatisticas: { kills: 580, deaths: 510, mvps: 4 }, biografia: "Top laner da MIBR LOL em sua estreia.",        ativo: true },
    { _id: 510, nickname: "Shini",    nome_completo: "Felipe Shini Carmo",      salario: 24000, equipe_id: 12, funcoes: ["Mid Lane"],  estatisticas: { kills: 720, deaths: 460, mvps: 6 }, biografia: "Mid laner promissor da MIBR LOL.",             ativo: true },
    { _id: 520, nickname: "Damage2",  nome_completo: "Marcus Lee Won-ho",       salario: 20000, equipe_id: 12, funcoes: ["ADC"],       estatisticas: { kills: 810, deaths: 490, mvps: 5 }, biografia: "Atirador coreano na nova era da MIBR LOL.",    ativo: true },

    // paiN CS (equipe_id: 13)
    { _id: 530, nickname: "biguzera", nome_completo: "Gabriel Biguzera Santos", salario: 48000, equipe_id: 13, funcoes: ["AWPer"],     estatisticas: { kills: 9800, deaths: 7400, mvps: 22 }, biografia: "AWPer habilidoso da paiN CS.",              ativo: true },
    { _id: 540, nickname: "hardzao",  nome_completo: "Gustavo Hardzao Kokubo",  salario: 42000, equipe_id: 13, funcoes: ["IGL", "Rifler"], estatisticas: { kills: 8200, deaths: 6900, mvps: 18 }, biografia: "IGL e rifler veterano da paiN CS.",      ativo: true },
    { _id: 550, nickname: "dumau",    nome_completo: "Douglas Dumau Pinto",     salario: 38000, equipe_id: 13, funcoes: ["Rifler"],    estatisticas: { kills: 7600, deaths: 6300, mvps: 15 }, biografia: "Rifler consistente da paiN CS.",           ativo: true },

    // LOUD CS (equipe_id: 14)
    { _id: 560, nickname: "zevy",     nome_completo: "Pedro Zevy Oliveira",     salario: 35000, equipe_id: 14, funcoes: ["AWPer"],     estatisticas: { kills: 6500, deaths: 5800, mvps: 14 }, biografia: "AWPer jovem da LOUD CS.",                  ativo: true },
    { _id: 570, nickname: "latto",    nome_completo: "Lucas Latto Rodrigues",   salario: 32000, equipe_id: 14, funcoes: ["Entry Fragger"], estatisticas: { kills: 7100, deaths: 6200, mvps: 12 }, biografia: "Entry fragger da LOUD CS.",            ativo: true },
    { _id: 580, nickname: "venomzera",nome_completo: "Mateus Venomzera Cruz",   salario: 40000, equipe_id: 14, funcoes: ["IGL", "Rifler"], estatisticas: { kills: 8800, deaths: 7000, mvps: 20 }, biografia: "IGL estrategista da LOUD CS.",          ativo: true },

    // INTZ CS (equipe_id: 15)
    { _id: 590, nickname: "koala",    nome_completo: "Pablo Koala Torres",      salario: 22000, equipe_id: 15, funcoes: ["Rifler"],    estatisticas: { kills: 4200, deaths: 4100, mvps: 8 },  biografia: "Rifler da INTZ CS.",                      ativo: true },
    { _id: 600, nickname: "honda",    nome_completo: "André Honda Costa",       salario: 20000, equipe_id: 15, funcoes: ["AWPer"],     estatisticas: { kills: 3900, deaths: 3700, mvps: 6 },  biografia: "AWPer veterano da INTZ CS.",               ativo: true },
    { _id: 610, nickname: "felps",    nome_completo: "Felipe Maffei",           salario: 25000, equipe_id: 15, funcoes: ["Entry Fragger"], estatisticas: { kills: 5100, deaths: 4600, mvps: 10 }, biografia: "Ex-pro de volta ao cenário pelo INTZ.", ativo: true },

    // VKS CS (equipe_id: 16)
    { _id: 620, nickname: "nqz",      nome_completo: "Nicolas NQZ Favero",      salario: 38000, equipe_id: 16, funcoes: ["AWPer"],     estatisticas: { kills: 7800, deaths: 6100, mvps: 19 }, biografia: "AWPer da VKS CS com ótimo ranking.",       ativo: true },
    { _id: 630, nickname: "leleo",    nome_completo: "Leonardo Leleo Mota",     salario: 30000, equipe_id: 16, funcoes: ["IGL"],       estatisticas: { kills: 5800, deaths: 5500, mvps: 11 }, biografia: "IGL cerebral da VKS CS.",                  ativo: true },
    { _id: 640, nickname: "doc",      nome_completo: "Diogo Doc Ferreira",      salario: 32000, equipe_id: 16, funcoes: ["Rifler"],    estatisticas: { kills: 6400, deaths: 5700, mvps: 13 }, biografia: "Rifler técnico da VKS CS.",                ativo: true },

    // LOUD Valorant (equipe_id: 17)
    { _id: 650, nickname: "cauanzin", nome_completo: "Cauan Cauanzin Pereira",  salario: 40000, equipe_id: 17, funcoes: ["Duelista"],  estatisticas: { kills: 6800, deaths: 5100, mvps: 19 }, biografia: "Duelista explosivo da LOUD Valorant.",     ativo: true },
    { _id: 660, nickname: "Less",     nome_completo: "Erick Less Rodrigues",    salario: 36000, equipe_id: 17, funcoes: ["Iniciador"], estatisticas: { kills: 5200, deaths: 4600, mvps: 13 }, biografia: "Iniciador da LOUD Valorant.",              ativo: true },
    { _id: 670, nickname: "tuyz",     nome_completo: "Arthur tuyz Andrade",     salario: 38000, equipe_id: 17, funcoes: ["Controlador"], estatisticas: { kills: 4900, deaths: 4300, mvps: 11 }, biografia: "Controlador calmante da LOUD Valorant.", ativo: true },

    // FURIA Valorant (equipe_id: 18)
    { _id: 680, nickname: "mwzera",   nome_completo: "Matheus mwzera Diniz",    salario: 45000, equipe_id: 18, funcoes: ["Duelista"],  estatisticas: { kills: 7200, deaths: 5300, mvps: 22 }, biografia: "Duelista estrela da FURIA Valorant.",      ativo: true },
    { _id: 690, nickname: "khalil",   nome_completo: "Khalil Santos",           salario: 38000, equipe_id: 18, funcoes: ["Controlador"], estatisticas: { kills: 4600, deaths: 4100, mvps: 10 }, biografia: "Controlador tático da FURIA Valorant.", ativo: true },
    { _id: 700, nickname: "QCK",      nome_completo: "Lucas QCK Silva",         salario: 35000, equipe_id: 18, funcoes: ["IGL", "Iniciador"], estatisticas: { kills: 5500, deaths: 4800, mvps: 14 }, biografia: "IGL e iniciador da FURIA Valorant.",  ativo: true },

    // paiN Valorant (equipe_id: 19)
    { _id: 710, nickname: "nataNk",   nome_completo: "Nathan nataNk Lima",      salario: 32000, equipe_id: 19, funcoes: ["Duelista"],  estatisticas: { kills: 5900, deaths: 4700, mvps: 15 }, biografia: "Duelista habilidoso da paiN Valorant.",   ativo: true },
    { _id: 720, nickname: "Mazin",    nome_completo: "Carlos Mazin Portela",    salario: 28000, equipe_id: 19, funcoes: ["Flex"],      estatisticas: { kills: 4400, deaths: 4000, mvps: 9 },  biografia: "Flex da paiN, joga em múltiplas funções.", ativo: true },
    { _id: 730, nickname: "Sandroim", nome_completo: "Sandro Sandroim Castro",  salario: 30000, equipe_id: 19, funcoes: ["Iniciador"], estatisticas: { kills: 4800, deaths: 4200, mvps: 11 }, biografia: "Iniciador inteligente da paiN Valorant.", ativo: true },

    // MIBR Valorant (equipe_id: 20)
    { _id: 740, nickname: "exit",     nome_completo: "Gabriel Exit Salave'a",   salario: 30000, equipe_id: 20, funcoes: ["Duelista"],  estatisticas: { kills: 5100, deaths: 4500, mvps: 12 }, biografia: "Duelista da MIBR Valorant.",               ativo: true },
    { _id: 750, nickname: "trAsh",    nome_completo: "Iago trAsh Farias",       salario: 26000, equipe_id: 20, funcoes: ["Controlador"], estatisticas: { kills: 3800, deaths: 3700, mvps: 7 },  biografia: "Controlador da MIBR Valorant.",          ativo: true },
    { _id: 760, nickname: "raafa",    nome_completo: "Rafael raafa Colares",    salario: 28000, equipe_id: 20, funcoes: ["Sentinela"], estatisticas: { kills: 4000, deaths: 3900, mvps: 8 },  biografia: "Sentinela defensivo da MIBR Valorant.",   ativo: true },

    // LOUD Free Fire (equipe_id: 21)
    { _id: 770, nickname: "Nobru",    nome_completo: "Bruno Nobru Carneiro",    salario: 25000, equipe_id: 21, funcoes: ["Fragger"],   estatisticas: { kills: 3200, deaths: 1800, mvps: 16 }, biografia: "Melhor fragger do Free Fire brasileiro.",  ativo: true },
    { _id: 780, nickname: "Cerol",    nome_completo: "André Cerol Luiz",        salario: 20000, equipe_id: 21, funcoes: ["IGL"],       estatisticas: { kills: 2100, deaths: 1600, mvps: 9 },  biografia: "IGL e estrategista da LOUD FF.",           ativo: true },

    // FURIA Free Fire (equipe_id: 22)
    { _id: 790, nickname: "xand",     nome_completo: "Alexandre xand Zanetti",  salario: 22000, equipe_id: 22, funcoes: ["Fragger"],   estatisticas: { kills: 2900, deaths: 1750, mvps: 13 }, biografia: "Fragger top da FURIA Free Fire.",          ativo: true },
    { _id: 800, nickname: "ritz",     nome_completo: "Rodrigo ritz Ferreira",   salario: 18000, equipe_id: 22, funcoes: ["Sniper"],    estatisticas: { kills: 2400, deaths: 1500, mvps: 10 }, biografia: "Sniper preciso da FURIA Free Fire.",       ativo: true }
])


// ─── PARTIDAS ────────────────────────────────────────────────────────────────
// placar: { casa: X, visitante: Y } = número de mapas/jogos vencidos

db.partidas.insertMany([

    // ════════════════════════════════════════════════════════════════════
    // CBLOL 2025 Split 1 — League of Legends (8 equipes)
    // Grupos
    { _id:  1, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  1, equipe_visitante_id:  3, data: ISODate("2025-02-01"), duracao_minutos:  92, placar: { casa: 2, visitante: 0 }, vencedor_id:  1, status: "concluida", mvp_id: 30  },
    { _id:  2, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  4, equipe_visitante_id:  6, data: ISODate("2025-02-01"), duracao_minutos: 108, placar: { casa: 2, visitante: 1 }, vencedor_id:  4, status: "concluida", mvp_id: 180 },
    { _id:  3, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  9, equipe_visitante_id: 11, data: ISODate("2025-02-01"), duracao_minutos:  99, placar: { casa: 1, visitante: 2 }, vencedor_id: 11, status: "concluida", mvp_id: 480 },
    { _id:  4, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id: 10, equipe_visitante_id: 12, data: ISODate("2025-02-01"), duracao_minutos:  85, placar: { casa: 2, visitante: 0 }, vencedor_id: 10, status: "concluida", mvp_id: 440 },
    { _id:  5, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  3, equipe_visitante_id:  4, data: ISODate("2025-02-08"), duracao_minutos: 122, placar: { casa: 1, visitante: 2 }, vencedor_id:  4, status: "concluida", mvp_id: 190 },
    { _id:  6, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  1, equipe_visitante_id:  9, data: ISODate("2025-02-08"), duracao_minutos:  88, placar: { casa: 2, visitante: 0 }, vencedor_id:  1, status: "concluida", mvp_id: 30  },
    { _id:  7, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  6, equipe_visitante_id: 11, data: ISODate("2025-02-08"), duracao_minutos: 101, placar: { casa: 1, visitante: 2 }, vencedor_id: 11, status: "concluida", mvp_id: 480 },
    { _id:  8, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id: 12, equipe_visitante_id: 10, data: ISODate("2025-02-08"), duracao_minutos:  95, placar: { casa: 2, visitante: 1 }, vencedor_id: 12, status: "concluida", mvp_id: 510 },
    { _id:  9, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  1, equipe_visitante_id:  4, data: ISODate("2025-02-15"), duracao_minutos: 138, placar: { casa: 1, visitante: 2 }, vencedor_id:  4, status: "concluida", mvp_id: 180 },
    { _id: 10, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  3, equipe_visitante_id: 11, data: ISODate("2025-02-15"), duracao_minutos: 110, placar: { casa: 2, visitante: 1 }, vencedor_id:  3, status: "concluida", mvp_id: 130 },
    { _id: 11, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  9, equipe_visitante_id: 12, data: ISODate("2025-02-15"), duracao_minutos:  90, placar: { casa: 2, visitante: 0 }, vencedor_id:  9, status: "concluida", mvp_id: 420 },
    { _id: 12, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  6, equipe_visitante_id: 10, data: ISODate("2025-02-15"), duracao_minutos: 105, placar: { casa: 1, visitante: 2 }, vencedor_id: 10, status: "concluida", mvp_id: 440 },
    { _id: 13, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  1, equipe_visitante_id: 11, data: ISODate("2025-02-22"), duracao_minutos: 118, placar: { casa: 2, visitante: 1 }, vencedor_id:  1, status: "concluida", mvp_id: 30  },
    { _id: 14, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  4, equipe_visitante_id: 12, data: ISODate("2025-02-22"), duracao_minutos:  82, placar: { casa: 2, visitante: 0 }, vencedor_id:  4, status: "concluida", mvp_id: 160 },
    { _id: 15, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Grupos", equipe_casa_id:  3, equipe_visitante_id:  9, data: ISODate("2025-02-22"), duracao_minutos:  96, placar: { casa: 2, visitante: 0 }, vencedor_id:  3, status: "concluida", mvp_id: 130 },
    // Playoffs
    { _id: 16, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Quartas",   equipe_casa_id:  4, equipe_visitante_id:  9, data: ISODate("2025-03-01"), duracao_minutos: 145, placar: { casa: 3, visitante: 1 }, vencedor_id:  4, status: "concluida", mvp_id: 180 },
    { _id: 17, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Quartas",   equipe_casa_id:  1, equipe_visitante_id: 11, data: ISODate("2025-03-01"), duracao_minutos: 172, placar: { casa: 3, visitante: 2 }, vencedor_id:  1, status: "concluida", mvp_id: 30  },
    { _id: 18, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Semifinal", equipe_casa_id:  3, equipe_visitante_id:  4, data: ISODate("2025-03-08"), duracao_minutos: 158, placar: { casa: 2, visitante: 3 }, vencedor_id:  4, status: "concluida", mvp_id: 190 },
    { _id: 19, jogo_id: 111, torneio: "CBLOL 2025 Split 1", fase: "Final",     equipe_casa_id:  1, equipe_visitante_id:  4, data: ISODate("2025-03-15"), duracao_minutos: 195, placar: { casa: 3, visitante: 2 }, vencedor_id:  1, status: "concluida", mvp_id: 30  },
    // Split 2 (agendadas)
    { _id: 20, jogo_id: 111, torneio: "CBLOL 2025 Split 2", fase: "Grupos", equipe_casa_id:  1, equipe_visitante_id:  3, data: ISODate("2025-07-05"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 21, jogo_id: 111, torneio: "CBLOL 2025 Split 2", fase: "Grupos", equipe_casa_id:  4, equipe_visitante_id: 11, data: ISODate("2025-07-05"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 22, jogo_id: 111, torneio: "CBLOL 2025 Split 2", fase: "Grupos", equipe_casa_id:  9, equipe_visitante_id: 10, data: ISODate("2025-07-12"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 23, jogo_id: 111, torneio: "CBLOL 2025 Split 2", fase: "Grupos", equipe_casa_id: 12, equipe_visitante_id:  6, data: ISODate("2025-07-12"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },

    // ════════════════════════════════════════════════════════════════════
    // IEM Rio 2025 — Counter-Strike 2 (6 equipes: 2,8,13,14,15,16)
    // Grupos
    { _id: 24, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id:  2, equipe_visitante_id:  8, data: ISODate("2025-03-10"), duracao_minutos: 104, placar: { casa: 2, visitante: 1 }, vencedor_id:  2, status: "concluida", mvp_id: 70  },
    { _id: 25, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id: 13, equipe_visitante_id: 16, data: ISODate("2025-03-10"), duracao_minutos:  88, placar: { casa: 2, visitante: 0 }, vencedor_id: 13, status: "concluida", mvp_id: 530 },
    { _id: 26, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id: 14, equipe_visitante_id: 15, data: ISODate("2025-03-10"), duracao_minutos:  92, placar: { casa: 2, visitante: 0 }, vencedor_id: 14, status: "concluida", mvp_id: 580 },
    { _id: 27, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id:  8, equipe_visitante_id: 16, data: ISODate("2025-03-12"), duracao_minutos: 120, placar: { casa: 2, visitante: 1 }, vencedor_id:  8, status: "concluida", mvp_id: 370 },
    { _id: 28, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id:  2, equipe_visitante_id: 14, data: ISODate("2025-03-12"), duracao_minutos:  95, placar: { casa: 2, visitante: 0 }, vencedor_id:  2, status: "concluida", mvp_id: 70  },
    { _id: 29, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id: 13, equipe_visitante_id: 15, data: ISODate("2025-03-12"), duracao_minutos:  78, placar: { casa: 2, visitante: 0 }, vencedor_id: 13, status: "concluida", mvp_id: 540 },
    { _id: 30, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id:  2, equipe_visitante_id: 13, data: ISODate("2025-03-14"), duracao_minutos: 132, placar: { casa: 2, visitante: 1 }, vencedor_id:  2, status: "concluida", mvp_id: 60  },
    { _id: 31, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Grupos",    equipe_casa_id:  8, equipe_visitante_id: 14, data: ISODate("2025-03-14"), duracao_minutos:  88, placar: { casa: 2, visitante: 0 }, vencedor_id:  8, status: "concluida", mvp_id: 360 },
    // Playoffs
    { _id: 32, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Semifinal", equipe_casa_id:  2, equipe_visitante_id:  8, data: ISODate("2025-03-16"), duracao_minutos: 145, placar: { casa: 1, visitante: 2 }, vencedor_id:  8, status: "concluida", mvp_id: 360 },
    { _id: 33, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Semifinal", equipe_casa_id: 13, equipe_visitante_id: 16, data: ISODate("2025-03-16"), duracao_minutos: 118, placar: { casa: 2, visitante: 1 }, vencedor_id: 13, status: "concluida", mvp_id: 530 },
    { _id: 34, jogo_id: 333, torneio: "IEM Rio 2025",     fase: "Final",     equipe_casa_id:  8, equipe_visitante_id: 13, data: ISODate("2025-03-18"), duracao_minutos: 175, placar: { casa: 3, visitante: 2 }, vencedor_id:  8, status: "concluida", mvp_id: 400 },
    // ESL Pro League 2025
    { _id: 35, jogo_id: 333, torneio: "ESL Pro League 2025", fase: "Grupos",  equipe_casa_id:  2, equipe_visitante_id: 13, data: ISODate("2025-04-05"), duracao_minutos:  98, placar: { casa: 2, visitante: 0 }, vencedor_id:  2, status: "concluida", mvp_id: 70  },
    { _id: 36, jogo_id: 333, torneio: "ESL Pro League 2025", fase: "Grupos",  equipe_casa_id:  8, equipe_visitante_id: 14, data: ISODate("2025-04-05"), duracao_minutos: 102, placar: { casa: 2, visitante: 1 }, vencedor_id:  8, status: "concluida", mvp_id: 360 },
    { _id: 37, jogo_id: 333, torneio: "ESL Pro League 2025", fase: "Grupos",  equipe_casa_id: 16, equipe_visitante_id: 15, data: ISODate("2025-04-05"), duracao_minutos:  85, placar: { casa: 2, visitante: 0 }, vencedor_id: 16, status: "concluida", mvp_id: 620 },
    { _id: 38, jogo_id: 333, torneio: "ESL Pro League 2025", fase: "Final",   equipe_casa_id:  2, equipe_visitante_id:  8, data: ISODate("2025-04-20"), duracao_minutos:   0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 39, jogo_id: 333, torneio: "ESL Pro League 2025", fase: "Grupos",  equipe_casa_id: 13, equipe_visitante_id: 14, data: ISODate("2025-04-26"), duracao_minutos:   0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },

    // ════════════════════════════════════════════════════════════════════
    // VCT Brasil 2025 Stage 1 — Valorant (6 equipes: 5,7,17,18,19,20)
    // Grupos
    { _id: 40, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id:  5, equipe_visitante_id:  7, data: ISODate("2025-02-22"), duracao_minutos:  88, placar: { casa: 1, visitante: 2 }, vencedor_id:  7, status: "concluida", mvp_id: 320 },
    { _id: 41, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id: 17, equipe_visitante_id: 18, data: ISODate("2025-02-22"), duracao_minutos:  79, placar: { casa: 2, visitante: 0 }, vencedor_id: 17, status: "concluida", mvp_id: 650 },
    { _id: 42, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id: 19, equipe_visitante_id: 20, data: ISODate("2025-02-22"), duracao_minutos:  95, placar: { casa: 2, visitante: 1 }, vencedor_id: 19, status: "concluida", mvp_id: 710 },
    { _id: 43, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id:  5, equipe_visitante_id: 17, data: ISODate("2025-03-01"), duracao_minutos: 102, placar: { casa: 2, visitante: 1 }, vencedor_id:  5, status: "concluida", mvp_id: 210 },
    { _id: 44, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id:  7, equipe_visitante_id: 19, data: ISODate("2025-03-01"), duracao_minutos:  85, placar: { casa: 2, visitante: 0 }, vencedor_id:  7, status: "concluida", mvp_id: 310 },
    { _id: 45, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id: 18, equipe_visitante_id: 20, data: ISODate("2025-03-01"), duracao_minutos:  72, placar: { casa: 2, visitante: 0 }, vencedor_id: 18, status: "concluida", mvp_id: 680 },
    { _id: 46, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id:  7, equipe_visitante_id: 17, data: ISODate("2025-03-08"), duracao_minutos: 110, placar: { casa: 1, visitante: 2 }, vencedor_id: 17, status: "concluida", mvp_id: 650 },
    { _id: 47, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id:  5, equipe_visitante_id: 19, data: ISODate("2025-03-08"), duracao_minutos:  91, placar: { casa: 2, visitante: 0 }, vencedor_id:  5, status: "concluida", mvp_id: 210 },
    { _id: 48, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id: 18, equipe_visitante_id:  7, data: ISODate("2025-03-08"), duracao_minutos: 118, placar: { casa: 1, visitante: 2 }, vencedor_id:  7, status: "concluida", mvp_id: 320 },
    { _id: 49, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id: 17, equipe_visitante_id: 20, data: ISODate("2025-03-15"), duracao_minutos:  80, placar: { casa: 2, visitante: 0 }, vencedor_id: 17, status: "concluida", mvp_id: 660 },
    { _id: 50, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Grupos",    equipe_casa_id: 19, equipe_visitante_id: 18, data: ISODate("2025-03-15"), duracao_minutos: 105, placar: { casa: 1, visitante: 2 }, vencedor_id: 18, status: "concluida", mvp_id: 680 },
    // Playoffs
    { _id: 51, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Semifinal", equipe_casa_id:  5, equipe_visitante_id: 17, data: ISODate("2025-03-22"), duracao_minutos: 128, placar: { casa: 3, visitante: 1 }, vencedor_id:  5, status: "concluida", mvp_id: 210 },
    { _id: 52, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Semifinal", equipe_casa_id:  7, equipe_visitante_id: 18, data: ISODate("2025-03-22"), duracao_minutos: 148, placar: { casa: 3, visitante: 2 }, vencedor_id:  7, status: "concluida", mvp_id: 310 },
    { _id: 53, jogo_id: 222, torneio: "VCT Brasil 2025 S1", fase: "Final",     equipe_casa_id:  5, equipe_visitante_id:  7, data: ISODate("2025-03-29"), duracao_minutos: 162, placar: { casa: 3, visitante: 2 }, vencedor_id:  5, status: "concluida", mvp_id: 210 },
    // Stage 2 (agendadas)
    { _id: 54, jogo_id: 222, torneio: "VCT Brasil 2025 S2", fase: "Grupos", equipe_casa_id: 17, equipe_visitante_id: 18, data: ISODate("2025-07-19"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 55, jogo_id: 222, torneio: "VCT Brasil 2025 S2", fase: "Grupos", equipe_casa_id:  5, equipe_visitante_id: 19, data: ISODate("2025-07-19"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 56, jogo_id: 222, torneio: "VCT Brasil 2025 S2", fase: "Grupos", equipe_casa_id:  7, equipe_visitante_id: 20, data: ISODate("2025-07-26"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },
    { _id: 57, jogo_id: 222, torneio: "VCT Brasil 2025 S2", fase: "Grupos", equipe_casa_id: 18, equipe_visitante_id: 19, data: ISODate("2025-07-26"), duracao_minutos: 0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null },

    // ════════════════════════════════════════════════════════════════════
    // Six Invitational 2025 — Rainbow Six Siege
    { _id: 58, jogo_id: 444, torneio: "Six Invitational 2025", fase: "Grupos",    equipe_casa_id:  2, equipe_visitante_id:  8, data: ISODate("2025-02-10"), duracao_minutos:  68, placar: { casa: 2, visitante: 1 }, vencedor_id:  2, status: "concluida", mvp_id: 80  },
    { _id: 59, jogo_id: 444, torneio: "Six Invitational 2025", fase: "Grupos",    equipe_casa_id: 13, equipe_visitante_id: 14, data: ISODate("2025-02-10"), duracao_minutos:  74, placar: { casa: 2, visitante: 0 }, vencedor_id: 13, status: "concluida", mvp_id: 530 },
    { _id: 60, jogo_id: 444, torneio: "Six Invitational 2025", fase: "Semifinal", equipe_casa_id:  8, equipe_visitante_id: 13, data: ISODate("2025-02-14"), duracao_minutos:  90, placar: { casa: 1, visitante: 2 }, vencedor_id: 13, status: "concluida", mvp_id: 540 },
    { _id: 61, jogo_id: 444, torneio: "Six Invitational 2025", fase: "Final",     equipe_casa_id:  2, equipe_visitante_id: 13, data: ISODate("2025-02-16"), duracao_minutos: 112, placar: { casa: 2, visitante: 1 }, vencedor_id:  2, status: "concluida", mvp_id: 90  },

    // ════════════════════════════════════════════════════════════════════
    // LBFF 2025 — Free Fire
    { _id: 62, jogo_id: 1014, torneio: "LBFF 2025 Serie A", fase: "Fase Regular", equipe_casa_id: 21, equipe_visitante_id: 22, data: ISODate("2025-03-01"), duracao_minutos: 45, placar: { casa: 1, visitante: 0 }, vencedor_id: 21, status: "concluida", mvp_id: 770 },
    { _id: 63, jogo_id: 1014, torneio: "LBFF 2025 Serie A", fase: "Fase Regular", equipe_casa_id: 22, equipe_visitante_id: 21, data: ISODate("2025-03-15"), duracao_minutos: 52, placar: { casa: 1, visitante: 0 }, vencedor_id: 22, status: "concluida", mvp_id: 790 },
    { _id: 64, jogo_id: 1014, torneio: "LBFF 2025 Serie A", fase: "Fase Regular", equipe_casa_id: 21, equipe_visitante_id: 22, data: ISODate("2025-04-05"), duracao_minutos: 48, placar: { casa: 1, visitante: 0 }, vencedor_id: 21, status: "concluida", mvp_id: 770 },
    { _id: 65, jogo_id: 1014, torneio: "LBFF 2025 Serie A", fase: "Final",        equipe_casa_id: 21, equipe_visitante_id: 22, data: ISODate("2025-05-10"), duracao_minutos: 58, placar: { casa: 1, visitante: 0 }, vencedor_id: 21, status: "concluida", mvp_id: 770 },
    { _id: 66, jogo_id: 1014, torneio: "LBFF 2025 Serie B", fase: "Fase Regular", equipe_casa_id: 22, equipe_visitante_id: 21, data: ISODate("2025-08-02"), duracao_minutos:  0, placar: { casa: 0, visitante: 0 }, vencedor_id: null, status: "agendada", mvp_id: null }
])


// povoamento concluido