const express = require("express");

const app = express();
const PORT = 3000;

const items = [];

app.post("api/v1/item", (req, res) => {

});

app.get("api/v1/item", (req, res) => {

})

app.get("api/v1/items", (req, res) => {
    
})


app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
})