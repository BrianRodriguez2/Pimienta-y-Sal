const{getProducts} = require("../data/products")

module.exports = {
    productDetail: (req,res) => {

        let idProduct = +req.params.id;
        let productos = getProducts.find((producto)=>producto.id===idProduct)


        res.render("detalleMenu",{           
            productos
        })
    }
}