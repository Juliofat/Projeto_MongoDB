// Definicao do nosso Banco de Dados

db = db.getSiblingDB("plataforma_esports")

db.organizacoes.drop()
db.jogos.drop()
db.equipes.drop()
db.pessoas.drop()
db.patrocinadores.drop()
db.contratos.drop()



// povoando a colecao de organizacoes --> total de 5 organizacoes

db.organizacoes.insertMany([
    {
        _id: 1010,
        nome: "LOUD",
        sigla: "LOUD",
        cnpj: "1111111001014",
        ano_fundacao: 2019,
        sede: {
            cidade: "Sao Paulo",
            pais: "Brasil"
        }
    },

    {
        _id: 1111,
        nome: "FURIA",
        sigla: "FURIA",
        cnpj: "1111331001015",
        ano_fundacao: 2017,
        sede: {
            cidade: "Uberlandia",
            pais: "Brasil"
        }
    },

    {
        _id: 1212,
        nome: "paiN Gaming",
        sigla: "PNG",
        cnpj: "1155111001424",
        ano_fundacao: 2010,
        sede: {
            cidade: "Sao Paulo",
            pais: "Brasil"
        }
    },

    {
        _id: 1313,
        nome: "T1",
        sigla: "T1",
        cnpj: "2211111001015",
        ano_fundacao: 2002,
        sede: {
            cidade: "Seul",
            pais: "Coreia do Sul"
        }
    },

    {
        _id: 1515,
        nome: "Team Liquid",
        sigla: "TL",
        cnpj: "1551111001014",
        ano_fundacao: 2000,
        sede: {
            cidade: "Utrecht",
            pais: "Holanda"
        }
    }
])



// povoando a colecao de jogos --> total de 3 tipos de jogos (LOL, valorant e CS2)

db.jogos.insertMany([
    {
        _id: 111,
        nome: "League of Legends",
        genero: "MOBA",
        desenvolvedora: "Riot Games",
        Sitema_operacional: ["Windows, MAcOS"]
    },

    {
        _id: 222,
        nome: "Valorant",
        genero: "FPS",
        desenvolvedora: "Riot Games",
        Sistema_operacional: ["Windows"]
    },

    {
        _id: 333,
        nome: "Counter-Strike 2",
        genero: "FPS",
        desenvolvedora: "Valve Corporation",
        Sistema_operacional: ["Windows", "Linux", "SteamOS"]
    }
])



// povoando a colecao de equipes --> total de 5 equipes(loud lol, furia cs, pain lol, t1 lol e tl vava)

db.equipes.insertMany([
    {
        _id: 1,
        nome: "LOUD LOL",
        organizacao_id: 1010,
        jogo_id: 111,
        orcamento: 1200000,
        data_criacao: ISODate("2019-01-01")
    },

    {
        _id: 2,
        nome: "FURIA CS",
        organizacao_id: 1111,
        jogo_id: 333,
        orcamento: 1800000,
        data_criacao: ISODate("2018-01-01")
    },

    {
        _id: 3,
        nome: "paiN LOL",
        organizacao_id: 1212,
        jogo_id: 111,
        orcamento: 1400000,
        data_criacao: ISODate("2013-01-01")
    },

    {
        _id: 4,
        nome: "T1 LOL",
        organizacao_id: 1313,
        jogo_id: 111,
        orcamento: 5000000,
        data_criacao: ISODate("2004-01-01")
    },

    {
        _id: 5,
        nome: "Liquid Valorant",
        organizacao_id: 1515,
        jogo_id: 222,
        orcamento: 2200000,
        data_criacao: ISODate("2020-01-01")
    }
])



// povoando a colecao de pessoas (deixando em unica linha para ficar mais enxuto)

db.pessoas.insertMany([

    // Loud lol

    {_id:10,nome:"Xyno",cpf:"111.111.111-11",salario:35000,tipo:"jogador",status:"Ativo",equipe_id:1,funcoes:["Top"]},
    {_id:20,nome:"Yougjay",cpf:"111.111.111-12",salario:32000,tipo:"jogador",status:"Ativo",equipe_id:1,funcoes:["Jungle"]},
    {_id:30,nome:"Envy",cpf:"111.111.111-13",salario:40000,tipo:"jogador",status:"Ativo",equipe_id:1,funcoes:["Mid"]},
    {_id:40,nome:"Bull",cpf:"111.111.111-14",salario:30000,tipo:"jogador",status:"Ativo",equipe_id:1,funcoes:["ADC"]},
    {_id:50,nome:"Uzent",cpf:"111.111.111-15",salario:28000,tipo:"jogador",status:"Ativo",equipe_id:1,funcoes:["Support"]},

    // Furia CS

    {_id:60,nome:"FalleN",cpf:"111.111.111-16",salario:60000,tipo:"jogador",status:"Ativo",equipe_id:2,funcoes:["AWPer"]},
    {_id:70,nome:"KSCERATO",cpf:"111.111.111-17",salario:58000,tipo:"jogador",status:"Ativo",equipe_id:2,funcoes:["Rifler"]},
    {_id:80,nome:"Yuurih",cpf:"111.111.111-18",salario:55000,tipo:"jogador",status:"Ativo",equipe_id:2,funcoes:["Rifler"]},
    {_id:90,nome:"YEKINDAR",cpf:"111.111.111-19",salario:35000,tipo:"jogador",status:"Ativo",equipe_id:2,funcoes:["Entry"]},
    {_id:100,nome:"Molodoy",cpf:"111.111.111-20",salario:30000,tipo:"jogador",status:"Ativo",equipe_id:2,funcoes:["Revezamento"]},

    // paiN lol

    {_id:110,nome:"Boal",cpf:"111.111.111-21",salario:32000,tipo:"jogador",status:"Ativo",equipe_id:3,funcoes:["Top"]},
    {_id:120,nome:"Carioka",cpf:"111.111.111-22",salario:34000,tipo:"jogador",status:"Ativo",equipe_id:3,funcoes:["Jungle"]},
    {_id:130,nome:"Kinnie",cpf:"111.111.111-23",salario:45000,tipo:"jogador",status:"Ativo",equipe_id:3,funcoes:["Mid"]},
    {_id:140,nome:"Marvin",cpf:"111.111.111-24",salario:42000,tipo:"jogador",status:"Ativo",equipe_id:3,funcoes:["ADC"]},
    {_id:150,nome:"Kuri",cpf:"111.111.111-25",salario:28000,tipo:"jogador",status:"Ativo",equipe_id:3,funcoes:["Support"]},

    // T1 LOL

    {_id:160,nome:"Doran",cpf:"111.111.111-26",salario:70000,tipo:"jogador",status:"Ativo",equipe_id:4,funcoes:["Top"]},
    {_id:170,nome:"Oner",cpf:"111.111.111-27",salario:65000,tipo:"jogador",status:"Ativo",equipe_id:4,funcoes:["Jungle"]},
    {_id:180,nome:"Faker",cpf:"111.111.111-28",salario:120000,tipo:"jogador",status:"Ativo",equipe_id:4,funcoes:["Mid"]},
    {_id:190,nome:"Peyz",cpf:"111.111.111-29",salario:70000,tipo:"jogador",status:"Ativo",equipe_id:4,funcoes:["ADC"]},
    {_id:200,nome:"Keria",cpf:"111.111.111-30",salario:68000,tipo:"jogador",status:"Ativo",equipe_id:4,funcoes:["Support"]},

    // Liquid vava

    {_id:210,nome:"nAts",cpf:"111.111.111-31",salario:50000,tipo:"jogador",status:"Ativo",equipe_id:5,funcoes:["Controlador, Sentinela"]},
    {_id:220,nome:"MiniBoo",cpf:"111.111.111-32",salario:48000,tipo:"jogador",status:"Ativo",equipe_id:5,funcoes:["Duelista"]},
    {_id:230,nome:"pupO",cpf:"111.111.111-33",salario:42000,tipo:"jogador",status:"Ativo",equipe_id:5,funcoes:["Iniciador"]},
    {_id:240,nome:"Kamo",cpf:"111.111.111-34",salario:45000,tipo:"jogador",status:"Ativo",equipe_id:5,funcoes:["Iniciador, Controlador"]},
    {_id:250,nome:"wayne",cpf:"111.111.111-35",salario:46000,tipo:"jogador",status:"Ativo",equipe_id:5,funcoes:["Iniciador"]},

    // staff de cada time:
    {_id:260,nome:"Raise",cpf:"999.999.999-91",salario:15000,tipo:"staff",status: "Ativo", papel:"Coach",equipe_id:1},
    {_id:270,nome:"Sidde",cpf:"999.999.999-92",salario:20000,tipo:"staff",status: "Ativo",papel:"Coach",equipe_id:2},
    {_id:280,nome:"XERO",cpf:"999.999.999-93",salario:18000,tipo:"staff", status: "Ativo",papel:"Coach",equipe_id:3},
    {_id:290,nome:"kkOMA",cpf:"999.999.999-94",salario:30000,tipo:"staff",status: "Ativo",papel:"Coach",equipe_id:4},
    {_id:300,nome:"LohaN",cpf:"999.999.999-95",salario:22000,tipo:"staff",status: "Ativo",papel:"Coach",equipe_id:5}
])



// povoando a colecao de patrocinadores

db.patrocinadores.insertMany([
    {
        _id: 100000,
        nome: "Red Bull",
        cnpj: "88888888000101",
        pais: "Austria",
        segmento: "Bebidas"
    },

    {
        _id: 200000,
        nome: "Intel",
        cnpj: "77777777000102",
        pais: "Estados Unidos",
        segmento: "Hardware"
    },

    {
        _id: 300000,
        nome: "Logitech",
        cnpj: "66666666000103",
        pais: "Suica",
        segmento: "Perifericos"
    },

    {
        _id: 400000,
        nome: "Samsung",
        cnpj: "55555555000104",
        pais: "Coreia do Sul",
        segmento: "Eletronicos"
    },

    {
        _id: 500000,
        nome: "HyperX",
        cnpj: "44444444000105",
        pais: "Estados Unidos",
        segmento: "Perifericos Gamer"
    }
])



// povoando a colecao de contratos

db.contratos.insertMany([
    {
        _id: 1111,
        patrocinador_id: 100000,
        equipe_id: 1,
        valor_contrato: 500000,
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2026-12-31")
    },

    {
        _id: 2222,
        patrocinador_id: 200000,
        equipe_id: 1,
        valor_contrato: 700000,
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2027-12-31")
    },

    {
        _id: 3333,
        patrocinador_id: 100000,
        equipe_id: 2,
        valor_contrato: 650000,
        inicio: ISODate("2025-02-01"),
        fim: ISODate("2027-01-31")
    },

    {
        _id: 4444,
        patrocinador_id: 300000,
        equipe_id: 2,
        valor_contrato: 450000,
        inicio: ISODate("2025-02-01"),
        fim: ISODate("2026-12-31")
    },

    {
        _id: 5555,
        patrocinador_id: 200000,
        equipe_id: 3,
        valor_contrato: 550000,
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2027-12-31")
    },

    {
        _id: 6666,
        patrocinador_id: 500000,
        equipe_id: 3,
        valor_contrato: 350000,
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2026-12-31")
    },

    {
        _id: 7777,
        patrocinador_id: 100000,
        equipe_id: 4,
        valor_contrato: 1200000,
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2028-12-31")
    },

    {
        _id: 8888,
        patrocinador_id: 400000,
        equipe_id: 4,
        valor_contrato: 900000,
        inicio: ISODate("2025-03-01"),
        fim: ISODate("2027-12-31")
    },

    {
        _id: 9999,
        patrocinador_id: 300000,
        equipe_id: 5,
        valor_contrato: 500000,
        inicio: ISODate("2025-01-01"),
        fim: ISODate("2026-12-31")
    },

    {
        _id: 1000,
        patrocinador_id: 500000,
        equipe_id: 5,
        valor_contrato: 650000,
        inicio: ISODate("2025-02-01"),
        fim: ISODate("2027-12-31")
    }
])


// povoamento concluito