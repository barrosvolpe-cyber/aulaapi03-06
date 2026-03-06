const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:nome/:idade/", (req, res) => {
    const { nome , idade } = req.params;
    res.status(200).json({
      mensagem: `Nome ${nome} , Idade:${idade}!`
    });
  });
  
  

app.listen(3010, () => {
  console.log("Felipe o Servidor esta on");
});
