# 🎬 Prime Flix — Aplicação de Cinema com React e REST API

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A" alt="React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router DOM">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=323330" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB API">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-visualização-do-projeto">Visualização</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-arquitetura-e-rotas">Arquitetura</a> •
  <a href="#-sistema-de-temas-theme-system">Theme System</a> •
  <a href="#-tecnologias-e-conceitos">Tecnologias</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-como-executar">Execução</a>
</p>

---

## 📌 Sobre o Projeto

O **Prime Flix** é uma Single Page Application (SPA) moderna e responsiva, desenvolvida para consulta, descoberta e gerenciamento de filmes.

Construída com **React**, a aplicação integra a API REST do **The Movie Database (TMDB)** para disponibilizar informações cinematográficas, incluindo títulos, cartazes, avaliações, gêneros, sinopses e datas de lançamento.

O projeto foi desenvolvido com base nos desafios da plataforma **Sujeito Programador**, aplicando conceitos de desenvolvimento front-end, consumo de APIs externas, gerenciamento de estados, navegação dinâmica e persistência de dados no navegador.

A interface apresenta uma experiência cinematográfica com alternância entre temas escuro e claro, notificações visuais, paginação, páginas de detalhes e gerenciamento de filmes favoritos.

---

## 🌎 Visualização do Projeto

<p align="center">
  <a href="https://projeto-prime-flix-psi.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Visualizar_Projeto_Online-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Visualizar Projeto Online na Vercel">
  </a>
</p>

<p align="center">
  <a href="https://projeto-prime-flix-psi.vercel.app/" target="_blank">
    <strong>🚀 Acessar Prime Flix</strong>
  </a>
</p>

---

## 🎯 Funcionalidades

- **Catálogo de filmes:** exibição dos filmes mais bem avaliados disponibilizados pela API do TMDB.
- **Paginação:** navegação entre páginas do catálogo, incluindo primeira, anterior, próxima e última página, respeitando o limite disponibilizado pela API.
- **Detalhes dos filmes:** visualização de informações completas, incluindo título, sinopse, avaliação, gêneros, data de lançamento e imagem de destaque.
- **Pesquisa de trailers:** direcionamento para pesquisa do trailer do filme no YouTube.
- **Sistema de favoritos:** armazenamento de filmes favoritos, permitindo adicionar, consultar e remover títulos.
- **Persistência local:** armazenamento de favoritos e preferências de tema utilizando `localStorage`.
- **Alternância de tema:** interface com modo escuro e modo claro, com preferência persistida entre sessões.
- **Notificações Toast:** feedback visual para ações realizadas pelo usuário, como adicionar favoritos e identificar filmes duplicados.
- **Navegação dinâmica:** gerenciamento de rotas com React Router DOM sem recarregamento completo da página.
- **Validação de rotas:** verificação dos parâmetros de identificação dos filmes e tratamento de rotas inválidas.
- **Página 404:** apresentação de página específica para endereços inexistentes.
- **Estados de carregamento:** indicadores visuais durante as requisições à API.
- **Tratamento de erros:** gerenciamento de falhas nas requisições e ausência de informações cinematográficas.
- **Layout responsivo:** interface adaptada para diferentes tamanhos de tela.

---

## 🚀 Arquitetura e Rotas

A aplicação utiliza **React Router DOM** para organizar a navegação entre páginas, permitindo o gerenciamento das rotas e renderização dinâmica dos componentes.

### Rotas da Aplicação

| Rota         | Página            | Descrição                                                                    |
| ------------ | ----------------- | ---------------------------------------------------------------------------- |
| `/`          | Home              | Catálogo de filmes mais bem avaliados, com cartazes, avaliações e paginação. |
| `/movie/:id` | Detalhes do Filme | Exibição das informações completas do filme selecionado.                     |
| `/favorites` | Meus Filmes       | Lista de filmes favoritos armazenados localmente.                            |
| `*`          | Página 404        | Tratamento de rotas inexistentes.                                            |

### Página Inicial — `/`

Responsável por consumir o endpoint de filmes mais bem avaliados do TMDB e apresentar os títulos em uma grade de cartões.

- Exibição de cartazes.
- Avaliações dos filmes.
- Paginação.
- Estados de carregamento.
- Navegação para os detalhes de cada título.

### Detalhes do Filme — `/movie/:id`

Utiliza parâmetros dinâmicos de rota para identificar e carregar as informações do filme selecionado.

- Imagem de destaque.
- Título e data de lançamento.
- Gêneros cinematográficos.
- Avaliação.
- Sinopse.
- Link para pesquisa do trailer no YouTube.

### Favoritos — `/favorites`

Área destinada ao gerenciamento dos filmes selecionados pelo usuário.

- Listagem dos filmes favoritos.
- Exibição de cartazes e avaliações.
- Acesso à página de detalhes.
- Remoção de filmes da lista.
- Persistência dos dados no navegador.

### Página 404 — `*`

Tratamento de rotas inexistentes ou parâmetros inválidos, evitando que endereços incorretos comprometam a experiência de navegação.

---

## 🎨 Sistema de Temas (Theme System)

O Prime Flix possui um sistema de alternância dinâmica entre **tema escuro (Dark Theme)** e **tema claro (Light Theme)**, permitindo que o usuário personalize a aparência da interface de acordo com sua preferência.

A implementação utiliza recursos do CSS3 e React para controlar a aparência global da aplicação, mantendo a consistência visual entre os componentes e páginas.

### Funcionalidades do Theme System

- **Alternância dinâmica:** troca entre os temas escuro e claro por meio de um controle interativo no cabeçalho.
- **Ícones adaptativos:** utilização de ícones vetoriais de Sol e Lua para representar visualmente os temas disponíveis.
- **Variáveis CSS:** centralização das cores e propriedades visuais para facilitar a manutenção e atualização dos temas.
- **Atributo `data-theme`:** identificação do tema ativo no documento, permitindo que o CSS aplique os estilos correspondentes.
- **Persistência da preferência:** armazenamento automático do tema escolhido utilizando `localStorage`.
- **Inicialização personalizada:** recuperação da preferência salva para manter o tema selecionado entre sessões.
- **Transições visuais:** mudanças suaves entre os estilos, proporcionando uma experiência de navegação mais agradável.

### Funcionamento Técnico

A alternância de temas utiliza o atributo `data-theme` no elemento raiz do documento para identificar o modo visual atualmente selecionado.

A partir desse atributo, as variáveis CSS são aplicadas dinamicamente, modificando as propriedades visuais da interface.

```css
:root[data-theme="dark"] {
   --background: #000000;
   --text-color: #ffffff;
}

:root[data-theme="light"] {
   --background: #ffffff;
   --text-color: #000000;
}
```

O React controla o estado do tema e sincroniza a preferência selecionada com o `localStorage`, utilizando a chave:

```text
@primeflix_theme
```

Dessa forma, quando o usuário altera o tema, a preferência é armazenada localmente e recuperada ao acessar novamente a aplicação.

---

## 🔔 Sistema de Notificações Toast

O projeto utiliza notificações Toast para apresentar feedback visual ao usuário sem interromper a navegação.

### Recursos

- Confirmação ao adicionar filmes aos favoritos.
- Aviso ao tentar adicionar um filme já existente.
- Feedback visual de ações realizadas.
- Substituição dos alertas nativos do navegador.
- Notificações não intrusivas integradas à interface.

---

## 🛠️ Tecnologias e Conceitos

### Tecnologias Utilizadas

| Tecnologia                        | Aplicação no Projeto                                                                         |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| **React**                         | Desenvolvimento da interface por componentes e gerenciamento de estados.                     |
| **JavaScript (ES6+)**             | Implementação da lógica da aplicação, funções, manipulação de dados e operações assíncronas. |
| **React Router DOM**              | Gerenciamento de rotas e navegação entre páginas.                                            |
| **Axios**                         | Realização de requisições HTTP para consumo da API REST.                                     |
| **CSS3**                          | Estilização, layouts, animações, transições e responsividade.                                |
| **CSS Variables**                 | Centralização de propriedades visuais e suporte à alternância de temas.                      |
| **The Movie Database API (TMDB)** | Fonte externa de dados cinematográficos.                                                     |
| **LocalStorage**                  | Persistência de favoritos e preferências de tema no navegador.                               |
| **YouTube**                       | Pesquisa de trailers cinematográficos por meio de links externos.                            |

### Conceitos Técnicos Aplicados

- Arquitetura baseada em componentes reutilizáveis.
- Desenvolvimento de Single Page Applications (SPA).
- Gerenciamento de estados com React Hooks.
- Utilização de `useState` para controle de estados.
- Utilização de `useEffect` para efeitos colaterais e sincronização de dados.
- Navegação com React Router DOM.
- Rotas dinâmicas com parâmetros.
- Consumo de APIs REST.
- Requisições assíncronas com Axios.
- Manipulação e transformação de dados JSON.
- Persistência de dados com Web Storage API.
- Implementação de Dark Theme e Light Theme.
- Gerenciamento de temas por meio de atributos personalizados (`data-theme`).
- Utilização de variáveis CSS para estilização dinâmica.
- Persistência de preferências de interface.
- Validação de parâmetros de rota.
- Tratamento de erros e estados de carregamento.
- Feedback visual por notificações Toast.
- Layouts responsivos com CSS Grid e Flexbox.
- Geração de URLs externas com `encodeURIComponent`.

---

## 💾 Persistência de Dados

A aplicação utiliza o `localStorage` para armazenar informações que devem permanecer disponíveis após o fechamento ou atualização do navegador.

| Chave              | Dados Armazenados                             |
| ------------------ | --------------------------------------------- |
| `@meusfilmes`      | Lista de filmes adicionados aos favoritos.    |
| `@primeflix_theme` | Preferência de tema selecionada pelo usuário. |

Os dados são armazenados localmente no navegador, permitindo que os favoritos e a preferência visual sejam mantidos entre sessões.

---

## 📂 Estrutura do Projeto

```text
projeto-prime-flix/
│
├── public/
│
├── src/
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── services/
│   │
│   ├── App.js
│   ├── index.js
│   └── styles/
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 💻 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) — versão LTS recomendada.
- npm ou Yarn.
- Git.
- Chave de API do TMDB.

### 1. Clonar o Repositório

```bash
git clone URL-DO-REPOSITORIO.git
```

### 2. Acessar a Pasta do Projeto

```bash
cd projeto-prime-flix
```

### 3. Instalar as Dependências

Utilizando npm:

```bash
npm install
```

Ou Yarn:

```bash
yarn install
```

### 4. Configurar a API do TMDB

Obtenha uma chave de API no [The Movie Database (TMDB)](https://www.themoviedb.org/).

Configure a chave de autenticação conforme o método de integração utilizado pelo projeto.

### 5. Iniciar o Servidor de Desenvolvimento

Utilizando npm:

```bash
npm start
```

Ou Yarn:

```bash
yarn start
```

Após iniciar o servidor, acesse a aplicação pelo endereço:

```text
http://localhost:3000
```

---

## 🧠 Aprendizados

O desenvolvimento do Prime Flix proporcionou a aplicação prática de conceitos modernos de desenvolvimento front-end, com foco na construção de aplicações reativas, consumo de APIs e organização de interfaces baseadas em componentes.

- **React:** desenvolvimento de interfaces reutilizáveis e gerenciamento de estados.
- **React Hooks:** aplicação de `useState` e `useEffect` para controle de estados e sincronização de dados.
- **React Router DOM:** implementação de navegação dinâmica e rotas parametrizadas.
- **Axios:** integração com APIs REST e gerenciamento de requisições HTTP.
- **API TMDB:** consumo de dados externos e apresentação de informações cinematográficas.
- **LocalStorage:** persistência de favoritos e preferências do usuário.
- **Theme System:** implementação de alternância entre tema escuro e claro, com persistência da preferência.
- **CSS Variables:** utilização de variáveis para gerenciamento de propriedades visuais e padronização dos temas.
- **CSS3:** construção de layouts responsivos, transições e estilos personalizados.
- **Tratamento de erros:** implementação de mecanismos para lidar com falhas e dados indisponíveis.
- **Experiência do usuário:** utilização de notificações, estados de carregamento e feedback visual.
- **JavaScript moderno:** utilização de recursos do ES6+ e operações assíncronas.

O projeto contribuiu para aprofundar conhecimentos em React, integração com serviços externos, gerenciamento de estados, navegação entre páginas, persistência de dados e construção de aplicações front-end completas, incluindo recursos de personalização visual.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e Engenharia de Software.

<p align="center"> <a href="[https://github.com/devRafaelSantana-Code](https://github.com/devRafaelSantana-Code)" target="\_blank"> \<img src="[https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)" alt="GitHub"> </a> </p>

---

<p align="center"> Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em React, JavaScript, consumo de APIs REST, gerenciamento de estados e desenvolvimento de interfaces responsivas. </p>
