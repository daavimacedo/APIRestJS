import http from "http";
const PORT = 3000; //Porta de conexão que vai ser utilizada na API
const rotas = {
    "/": "Curso de Node.js", //Rota base
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
}

//Criando o servidor com o uso da biblioteca http
const server = http.createServer((req,res)=>{
    //escrevendo cabeçado da resposta (todas as informações importantes)
    res.writeHead(200, {"Content-Type": "text/plain"}); //200(Enviando um OK) Content-Type(Tipo de conteúdo que está sendo enviado na resposta)
    res.end(rotas[req.url]); //Conteúdo em si - Pegando url da requisição
});


app.listen(PORT, ()=>{ //PORT é o número da porta lógica que a conexão vai acontecer
    console.log("servidor escutando!");
});