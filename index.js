import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(cors());

// Leer datos de tasa de cambio desde db.json
const dbPath = path.resolve("db.json");
let exchangeRates = {};

try {
  const data = fs.readFileSync(dbPath, "utf8");
  exchangeRates = JSON.parse(data);
} catch (err) {
  console.error("Error leyendo el archivo db.json:", err);
}

// Ruta para obtener tasas de cambio
app.get("/api/rates", (req, res) => {
  res.json(exchangeRates);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
