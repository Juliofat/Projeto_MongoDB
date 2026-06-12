# Projeto MongoDB - Banco de Dados

# Plataforma de Gerenciamento de Organizações de eSports

##  Descrição da Aplicação

A aplicação tem como objetivo gerenciar informações relacionadas ao cenário competitivo de esportes eletrônicos (eSports). O sistema permite armazenar dados de organizações, equipes, jogadores, membros da comissão técnica, jogos eletrônicos, patrocinadores e contratos de patrocínio.

A plataforma foi desenvolvida utilizando MongoDB, adotando o modelo orientado a documentos para representar entidades do ambiente competitivo de eSports.

##  Objetivo

O objetivo do sistema é possibilitar o gerenciamento das principais informações das organizações de eSports, permitindo consultas sobre equipes, jogadores, salários, patrocinadores e investimentos realizados nas equipes.

##  Estrutura do Banco de Dados

O banco de dados foi denominado "plataforma_esports" e é composto pelas seguintes coleções:

### Organizacoes

Armazena informações sobre as organizações de eSports.

Atributos:

* _id
* nome
* sigla
* cnpj
* ano_fundacao
* sede

### Jogos

Armazena os jogos disputados pelas equipes.

Atributos:

* _id
* nome
* genero
* desenvolvedora
* sistema_operacional

### Equipes

Representa as equipes competitivas vinculadas a uma organização e a um jogo.

Atributos:

* _id
* nome
* organizacao_id
* jogo_id
* orcamento
* data_criacao

### Pessoas

Armazena jogadores e membros da comissão técnica.

Atributos:

* _id
* nome
* cpf
* salario
* tipo
* status
* equipe_id
* funcoes ou papel

### Patrocinadores

Contém informações dos patrocinadores das organizações.

Atributos:

* _id
* nome
* cnpj
* pais
* segmento

### Contratos

Representa os contratos firmados entre patrocinadores e equipes.

Atributos:

* _id
* patrocinador_id
* equipe_id
* valor_contrato
* inicio
* fim

##  Relacionamentos

* Uma organização pode possuir várias equipes.
* Uma equipe pertence a apenas uma organização.
* Uma equipe participa de apenas um jogo.
* Uma equipe possui vários jogadores e membros da comissão técnica.
* Um patrocinador pode patrocinar várias equipes.
* Uma equipe pode possuir vários patrocinadores através dos contratos.

##  Dados Inseridos

Foram cadastradas:

* 5 organizações de eSports;
* 3 jogos eletrônicos;
* 5 equipes competitivas;
* 25 jogadores profissionais;
* 5 membros da comissão técnica;
* 5 patrocinadores;
* 10 contratos de patrocínio.

##  Consultas Desenvolvidas

Foram implementadas consultas para:

* Listar jogadores com salários acima de determinado valor;
* Calcular a folha salarial das equipes;
* Identificar os patrocinadores que mais investem;
* Relacionar equipes e organizações utilizando Lookup;
* Identificar o jogo com maior quantidade de equipes cadastradas.

Essas consultas utilizam recursos de seleção, projeção, agregação, agrupamento, ordenação e junção de dados oferecidos pelo MongoDB.
