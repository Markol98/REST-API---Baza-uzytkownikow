import express from 'express';
import { v4 as uuidv4} from 'uuid';

const router = express.Router();
let konta = []

//getter
router.get('/', (req, res) => {
    res.send(konta);
});

//dodawanie kont
router.post('/', (req, res) => {
    const konto = req.body; // --- let
    konta.push({ ...konto, id: uuidv4() });
    res.send(`Użytkownik o loginie ${konto.login} został dodany do bazy danych`);
});

//tworzenie id dla kont
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const findLogin = konta.find((konto) => konto.id === id);
    res.send(findLogin);
});

//usuwanie kont
router.delete('/:id', (req, res) => { 
    const { id } = req.params;
    
    const dilit = konta.find(konto => konto.id === id);
    if (dilit) {
        konta = konta.filter(konto => konto.id !== id);
        res.send(dilit);
    } else {
        res.send(`Użytkownik o id: ${id} nie istnieje`);
    }
});

//wprowadzenie zmian w kontach
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { login, haslo, premium } = req.body;
    const konto = konta.find((konta) => konta.id === id);

    if(login) konto.login = login;
    if(haslo) konto.haslo = haslo;
    if(premium) konto.premium = premium;

    res.send(`Dane użytkownika o id ${id} zostały zaktualizowane`);
});

export default router;
