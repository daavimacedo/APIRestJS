import mongoose, {mongo} from "mongoose";
//mongodb+srv://admin:<password>@cluster0.nvq814p.mongodb.net/?retryWrites=true&w=majority
async function conectaNaDataBase(){
    mongoose.connect("mongodb+srv://admin:1234@cluster0.nvq814p.mongodb.net/livraria?retryWrites=true&w=majority");

    return mongoose.connection;
};

export default conectaNaDataBase;
