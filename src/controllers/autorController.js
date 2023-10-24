import {autor} from "../models/Autor.js";

class AutorController {
    //static para não ser necessário criar instâncias para da classe para chamar o método
    static async listarAutores (req,res){
        try {
            // controller chama o model Livro através
            // do método livro.find({})
             const listaAutores = await autor.find({});
             res.status(200).json(listaAutores);
           } catch (erro) {
             res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
           }
    }

    static async listarAutorPorId (req,res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
           }
    }

    static async cadastrarAutor (req,res){
        try{
            const novoAutor = await autor.create(req.body); //No body da requisição está o objeto que será adicionado, nesse caso
            res.status(201).json({message: "criado com sucesso", autor: novoAutor}) // 201 -código de status de registro criado
        } catch (erro) {
            //500 é o código de problema com relação ao servidor
            res.status(500).json({message: `${erro.massage} - falha ao cadastrar autor`});
        }
    }

    static async atualizarAutor (req,res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atualizado"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na atualização`});
           }
    }

    static async excluirAutor (req,res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor excluído com sucesso"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na exclusão`});
           }
    }
};

export default AutorController;