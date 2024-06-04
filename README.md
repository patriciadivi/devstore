<div align="center">
<h1 fontsize="80px">Bem vindo ao repositório Devstore! 📋</h1>
  </br>

   <img controls autoplay loop muted markdown="1" src="https://gist.githubusercontent.com/patriciadivi/4e1bc8a95cb7e155263e2810d8b393c1/raw/6130d5fd3fada2fc2c6a4a5e4c4cc2335123787f/devstoreHome.svg" alt="Video representativa da aplicação" >
   
  <h4 align="center"> 
	🚧  Devstore ♻️ Em Desenvolvimento 🚀 🚧
  </h4>

  <span align="center"> 
	🌐 Visite Devstore 🔛 
    <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits">
      Devstore 🚀
    </a>
  </span>
  </br>
  </br>

  <p align="center">
   • <a href="#-sobre-o-projeto">Sobre o projeto</a> •
   <a href="#-projeto-em-sua-maquina">Projeto em sua maquina</a> •
   <a href="#-como-executar-o-projeto">Como executar o projeto</a> •
   <a href="#-tecnologias">Tecnologias</a> •
  </p>
  
  <div align="left">

 ## 💻 Sobre o projeto
  <h3>
  O projeto é uma plataforma de compras online, </br> seu intuito é
  trazer a praticidade na compra </br> de suas roupas favoritas,</br>
  tornando a vida dos usuários mais agradável.
 
  </br>
  </br>
  
  
 ## 🔗 Projeto em sua maquina
  ```Bash

  > 1 - Clone este repositório
    
  # Abra o seu TERMINAL e digite o comando abaixo.
  $ git clone git@github.com:patriciadivi/devstore.git

  # Acesse a pasta do projeto no terminal/cmd
  $ cd devstore/

  # Caso tenha o editor de codigo(VSCode) digite o comando abaixo.
  $ code .
    - OBS: Caso não tenha, acesse a seção `Como executar o projeto` através do índice e realize o download.

  # Caso não tenha abra normalmente procurando o diretório(pasta) com nome "devstore"

  ```
  
  <details align="left">
	<summary>
    <strong>
    <h1>🚨</h1>
      Caso não queria subir esse projeto para o seu GitHub, 'IGNORE' os proximos passos dessa seção.
      <h1>🚨</h1> 
    </strong>
	</summary>
	
    
  ```Bash
  > 2 - Criando uma repositório no seu GitHub
      # Abra seu GitHub
      - Crie um `novo repositório`.
  ```

  <div align="center">
    <img src="https://user-images.githubusercontent.com/38478917/188983072-db5702fb-bb5d-4835-9338-d0a0bb981741.png"/>
  </div>
  <br />
	
```bash
	
> Defina um `nome` ao seu `repositório` e aperte o botão `crie o repositório`.
	
```

<br />

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188986397-3f3177d7-9d13-414b-9b2b-089c3719e771.png"/>
	<img src="https://user-images.githubusercontent.com/38478917/188987212-0ba26086-f06e-49a6-aaf9-0c7b1f9ed0c0.png"/>
</div>
<br />
	
```bash
> 3 - Vá até a aba do seu repositório criado

 # Encontre o campo abaixo, deixe a guia aberta pois, vamos usa-la no 'PASSO 5'.
```
	
<br />

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188980734-6f857914-9c4a-4597-80f4-e40a55171343.png"/>
</div>
<br />
	
```bash
> 4 - Adicione as mudanças ao _stage_ do Git e faça um `commit`

 # Voltei ao seu terminal.
 # Verifique que as mudanças ainda não estão no _stage_ digite o comando abaixo.
  # Exemplo:
   $ `git status` (devem aparecer listadas as novas alterações em vermelho)
 # Adicione o arquivo alterado, realizado no 'PASSO 3' ao stage do Git
   $ `git add .` (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
   $ `git status` (devem aparecer listadas as novas alterações em verde)
 # Faça seus `commit`
  # Exemplo:
   $ `git commit -m "feat:  Iniciando novo projeto 🚀" `.
   $ `git status` (deve aparecer uma mensagem tipo nothing to commit )

> 5 - Adicione o projeto local ao seu repositório criado no `PASSO 2`.
	
 # Adicione o projeto local ao seu repositório criado no 'PASSO 3'.
  # Rode os comando abaixo, de acordo com a sua GUIA mostrada no 'PASSO 3'.
  # 1° comando. Exemplo:
   $ `git remote add origin git@github.com:patriciadivi/repositorioTeste.git`.
  # 2° comando. Exemplo:
   $ `git branch -M main`.
  # 3° comando. Exemplo:
   $ `git push -u origin main`.
	
` AGORA É SÓ ATUALIZAR A PÁGINA E SER FELIZ `😊🎉
	
```

<br />
	
</details>

<br />

## 🚀 Como executar o projeto

  ### Pré-requisitos

  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:<br />
  [Git](https://git-scm.com) (terminal), [Node.js](https://nodejs.org/en/) (motor da aplicação)<br />
  Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
  
  
  <details align="left">
    <summary> 
      <strong>
        <h2>👩🏻‍💻</h2> 
        Frontend (pasta front-end)
      </strong>
    </summary>

 ```bash

  > 1 - Instale as dependências
    $ npm install

  > 2 - Execute a aplicação em modo de desenvolvimento
    $ npm run dev

  # O servidor web inciará na porta:3000 - acesse http://localhost:3000/

 ``` 
  <br />
  
 </details>

 <br />
 
 ## 🛠 Tecnologias
	
  <p>As seguintes ferramentas foram usadas na construção do projeto:</p>
	
	
<details align="left">
    <summary><strong>👩🏻‍💻 <strong>Frontend</strong>
			(<a href="https://nextjs.org/docs/getting-started/installation">Next.js</a> +
		 	<a href="https://www.typescriptlang.org/docs/">TypeScript</a>)
		</summary>
		</br>
		<ul>
      <li>
        <a href="https://nextjs.org/docs/getting-started/installation">Next.js
        </a>
      </li>
			<li>
        <a href="https://pt-br.legacy.reactjs.org/docs/getting-started.html">React</a>
      </li>
			<li>
        <a href="https://reactrouter.com/en/main">React   Router Dom
        </a>
      </li>
			<li>
        <a href="https://tailwindcss.com/docs/installation">Tailwind CSS
        </a>
      </li>
      <li>
        <a href="https://lucide.dev/guide/installation">Lucide React
        </a>
      </li>
		</ul>
	</details>
 
 </br>
 
<details align="left">
  <summary><strong>🏗️ <strong>Utilitários</strong></summary>
<ul>
<li>Commit: <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits">Conventional Commits</a></li>
<li>Editor: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
<li>Fontes: <a href="https://fonts.google.com/specimen/Inter?query=inter">Inter</a></li>
<li>Teste de API: <a href="https://insomnia.rest/">Insomnia</a></li>
</ul>

</details>
	
 
 </div>

   ---
  ⌨️ com ❤️ por [Patricia Dias Viana](https://github.com/patriciadivi) 😊
</div>
