import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
//Criando Schemas (Esquemas) - Schema é um objeto de configuração que define a estrutura e as propriedades de um documento

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, requiered:true }, //required true - propriedade obrigatória
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false}); //Não vai versionar o Schema

//Modelo é um objeto que representa uma coleção na base de dados

const livro = mongoose.model("livros", livroSchema); //Qual colecão que ele se refere (String) e o Schema dela 


export default livro;