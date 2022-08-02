const express = require('express');
const app = express();

app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const arrayProductos = [{nombre: "mochila", precio: 5000, foto:"https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Backpack-256.png"},
                   {nombre:"regla", precio: 1000, foto:"https://cdn0.iconfinder.com/data/icons/mac-applications-icons-by-omer-cetin/128/ruler.png"},
                   {nombre:"transportador", precio: 250, foto:"https://cdn1.iconfinder.com/data/icons/office-material-9/128/curve_ruler_protactor_ruler_set_square_stationary-128.png"},
                   {nombre:"lapicera", precio: 120, foto:"https://cdn2.iconfinder.com/data/icons/scrap/Pen.png"}]


app.get("/", (req, res) =>{
    res.render("form");
})
app.get("/productos",(req, res)=>{
    res.render("index",{array: arrayProductos})
})
app.post("/productos", (req, res)=>{
    const productoRecibido = req.body
    const productoNuevo = {nombre: productoRecibido.title , precio: productoRecibido.price, foto: productoRecibido.thumbnail};
    arrayProductos.push(productoNuevo)
    res.render("index", {array: arrayProductos})
})

const PORT = 8000

const server = app.listen(PORT, ()=> {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))