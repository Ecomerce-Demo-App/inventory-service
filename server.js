const express = require("express");

const app = express();

app.get("/inventory/:id", (req, res) => {

    res.json({
        productId: req.params.id,
        stock: 100
    });

});

app.listen(5008, () =>
    console.log("Inventory running")
);
