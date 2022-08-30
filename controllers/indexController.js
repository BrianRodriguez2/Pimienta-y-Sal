const{getProducts} = require("../data/products")

module.exports = {
    index: (req,res) => {

        res.render("index",{
            productos:getProducts
        })
    }
}