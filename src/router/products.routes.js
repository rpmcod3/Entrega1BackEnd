import { Router } from "express";
import ProductManager from "../controllers/ProductManager.mjs";

const ProductsRouter = Router()
const product = new ProductManager();



ProductsRouter.get("/", async (req, res) => {
    res.send (await product.getProducts())
    
    });
    
    ProductsRouter.get("/:id", async (req, res) => {
        let id = req.params.id
        res.send (await product.getProductsById(id))
        
        })
    
    ProductsRouter.post("/", async (req, res) => {
    let newProduct = req.body
    res.send(await product.addProducts(newProduct))
    
    
    })
    
    ProductsRouter.put("/:id", async (req, res) => {
    let id = req.params.id;
    let updateProducts = req.body;
    res.send (await product.updateProducts(id, updateProducts));
    
    });
    
    
    
    
    ProductsRouter.delete("/:id", async (req, res) => {
    let id = req.params.id 
    res.send (await product.deleteProducts(id))
    })
    

    export default ProductsRouter