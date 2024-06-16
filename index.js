import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

// Datos de tasa de cambio
const exchangeRates = {
  USD: { EUR: 0.85, GBP: 0.75, JPY: 110 },
  EUR: { USD: 1.18, GBP: 0.88, JPY: 129 },
  GBP: { USD: 1.33, EUR: 1.14, JPY: 146 },
  JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068 },
};

// Ruta para obtener tasas de cambio
app.get("/api/rates", (req, res) => {
  res.json(exchangeRates);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
