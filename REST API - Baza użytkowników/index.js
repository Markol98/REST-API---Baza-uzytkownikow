import express from "express";
import bodyParser from "body-parser";

import userRoutes from './konta.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/konta', userRoutes);
app.get('/', (req, res) => res.send('Strona główna'));
app.all('*', (req, res) => res.send("Droga nie istnieje"));

app.listen(PORT, () => console.log(`Serwer na porcie: http://localhost:${PORT}`));
