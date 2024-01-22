import  express  from "express";
import ProductsRouter from "./router/products.routes.js";
import CartRouter from "./router/carts.routes.js";


const app = express();
const Port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", ProductsRouter)
app.use("/api/cart", CartRouter)



app.listen(Port, ()  => {
console.log (`Server Express Puerto ${Port}`);

});



