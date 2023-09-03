const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src", "static")))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"))
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on http://127.0.0.1:5000");
})