
const PORT = 3000; //Porta de conexão que vai ser utilizada na API
import app from "./src/app.js";

app.listen(PORT, ()=>{ 
    console.log("servidor escutando!");
});