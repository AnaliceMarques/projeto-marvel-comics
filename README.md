# projeto-marvel-comics

O Projeto Marvel Comics é uma Single Page Application para uma consulta de quadrinhos utilizando a API da Marvel e API Google Maps para todos os consumos de dados.

## **Funcionalidades do Projeto**

- [x] Página inicial com uma lista de 30 quadrinho;
- [x] Cada quadrinho é representado por um card, contendo imagem e título;
- [x] Cada card tem um botão para acessar os detalhes do quadrinho e outro de enviar;
- [x] Ao clicar no botão "Details" do card abrirá um modal com as informações do quadrinho selecionado e um botão para voltar a página inicial;
- [x] Ao clicar no botão "Send" do card a aplicação será direcionada para a página Map, onde o usuário pode arrastar o marcador até o local do endereço que ele deseja enviar o quadrinho;
- [x] Na barra de pesquisa da Home o usuário pode digitar o nome do quadrinho que ele deseja buscar (case insensitive);
- [x] No Header de todas as páginas tem o botão para acessar a página About da Marvel;
- [x] No Header da página Map tem um botão para voltar para Home;
- [x] Caso o usuário digite algum endereço inválido será renderizada a página de erro, informando "Page Not Found!";

## **Tecnologias e Bibliotecas Utilizadas**

1. [React](https://pt-br.reactjs.org/) (React.JS, React Context, Estado Global)
2. [React Router](https://reactrouter.com/)
3. [Axios](https://axios-http.com/)
4. [Tailwind](https://tailwindcss.com)
5. [React Icons](https://react-icons.github.io/react-icons/)
6. [md5](https://www.npmjs.com/package/md5)
7. [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)

## **Como rodar este projeto?**

```bash
# Clone este repositório
$ git clone https://github.com/AnaliceMarques/projeto-marvel-comics.git

# Acesse a pasta do projeto no seu terminal
$ cd projeto-marvel-comics
$ cd marvel-comics

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# A aplicação será iniciada na porta 3000, acesse pelo navegador: http://localhost:3000
```

## **Próximos passos**

- [ ] Inserir mais quadrinhos na página inicial, através de paginação;
- [ ] Fazer um form do endereço com a função de autocompletar, de acordo com a localização do marcador;
- [ ] Inserir cadastro de usuário.

## **Contato**

analicemarquessl@gmail.com

[LinkedIn](https://www.linkedin.com/in/analicemarquessl)
