# Projeto MongoDB - Banco de Dados

# Plataforma de Gerenciamento de Organizações de eSports

##  Descrição da Aplicação

A aplicação tem como objetivo gerenciar informações relacionadas ao cenário competitivo de esportes eletrônicos (eSports). O sistema permite armazenar dados de organizações, equipes, jogadores, membros da comissão técnica, jogos eletrônicos, patrocinadores e contratos de patrocínio.

A plataforma foi desenvolvida utilizando MongoDB, adotando o modelo orientado a documentos para representar entidades do ambiente competitivo de eSports.

##  Objetivo

O objetivo do sistema é possibilitar o gerenciamento das principais informações das organizações de eSports, permitindo consultas sobre equipes, jogadores, salários, patrocinadores e investimentos realizados nas equipes.

##  Estrutura do Banco de Dados
M
O banco de dados foi denominado "plataforma_esports" e é composto pelas seguintes coleções:

### Organizacoes

Armazena informações sobre as organizações de eSports.

Atributos:

* _id
* nome
* cnpj
* ano_fundacao
* sede
* redes_sociais

### Jogos

Armazena os jogos disputados pelas equipes.

Atributos:

* _id
* nome
* genero
* desenvolvedora
* data_lancamento
* plataformas

### Equipes

Representa as equipes competitivas vinculadas a uma organização e a um jogo.

Atributos:

* _id
* nome
* organizacao_id
* jogo_id
* orcamento_anual
* ativa
* conquistas

### Jogadores

Armazena os jogadores 

Atributos:

* _id
* nickname
* nome_completo
* salario
* equipe_id
* funcoes
* estatisticas
* biografia
* ativo

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
* empresa
* segmento
* sede_mundial
* global
* site_oficial



##  Dados Inseridos

Foram cadastradas:

* 5 organizações de eSports;
* 3 jogos eletrônicos;
* 5 equipes competitivas;
* 25 jogadores profissionais;
* 5 patrocinadores;
* 10 contratos de patrocínio.

##  Consultas Desenvolvidas

Foram implementadas consultas para:

* Atualizar o status de um jogador ($set)
