import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";

const app = express(); //criando instância de express
app.use(express.json()); //Transforma todas as requisições de String para Json

//Criando conexão
const conexao = await conectaNaDataBase();

//Eventos 
conexao.on("error", (erro)=>{   //Se o evento for um erro
    console.error("erro de conexão:", erro)
});

conexao.once("open", ()=>{ //Se a conexão for aberta com sucesso
    console.log("Conexão com o banco feita com sucesso")
})


const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id); 
    })
}

//READ
app.get("/",(req, res)=>{
    res.status(200).send("Curso de Node.js");
});

app.get("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id); 
    res.status(200).json(livros[index]);
})
app.get("/livros", (req,res)=>{
    res.status(200).json(livros);
});

//CREATE
app.post("/livros",(req,res)=>{
    livros.push(req.body); //No body da requisição está o objeto que será adicionado, nesse caso
    //Toda requisição tem uma resposta
    res.status(201).send("Livro cadastrado com sucesso") // 201 -código de status de registro criado
});

//UPDATE
app.put("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id); 
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

//DELETE
app.delete("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index,1);
    res.status(200).send("Livro removido com sucesso");
})
export default app;

