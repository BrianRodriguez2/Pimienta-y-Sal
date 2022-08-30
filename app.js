const express=require('express');
const app=express();
const path = require('path');
const PORT = 3000;

// Enrutadores
const indexRouter = require("./routes/indexRouter")
const productRouter = require("./routes/productRouter")

//Middlewares
app.use(express.static(path.join(__dirname, "/public")))

// Views Config
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

// ROUTES
app.use("/", indexRouter)
app.use("/producto", productRouter)

app.listen(PORT, ()=>{
    console.log(`Server up en localhost:${PORT}`)
})