import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";
class LivroController {
    //static para não ser necessário criar instâncias para da classe para chamar o método
    static async listarLivros (req,res){
        try {
            // controller chama o model Livro através
            // do método livro.find({})
             const listaLivros = await livro.find({});
             res.status(200).json(listaLivros);
           } catch (erro) {
             res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
           }
    }

    static async listarLivrosPorId (req,res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
           }
    }

    static async cadastrarLivro (req,res){
        //No body da requisição está o objeto que será adicionado, nesse caso
        const novoLivro = req.body; //incluir o id
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}} //_doc é a o propriedade que queremos de autor (informações), tirando as outras informações que o JS traz
            const livroCriado = await livro.create(livroCompleto);
            //Antes de autor -> const novoLivro = await livro.create(req.body); 
            

            res.status(201).json({message: "criado com sucesso", livro: novoLivro}) // 201 -código de status de registro criado
        } catch (erro) {
            //500 é o código de problema com relação ao servidor
            res.status(500).json({message: `${erro.massage} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivro (req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na atualização`});
           }
    }

    static async excluirLivro (req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro excluído com sucesso"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na exclusão`});
           }
    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    }
};

export default LivroController;