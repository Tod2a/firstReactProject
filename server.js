import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Assure-toi que cela correspond à l'URL où tourne ton front-end React
}));

// Données du customer en dur
const customer = {
    firstName: 'Thomas',
    lastName: 'Copin',
    description: 'Je suis un développeur passionné par les technologies web et les jeux de société.',
    email: 'thomas.copin@ifosup.wavre.be',
    github: 'github.com/Tod2a',
    linkedin: 'linkedin.com/in/thomas-copin-02935928b'
};

// Définir une route GET pour renvoyer les données du customer
app.get('/api/customer', (req, res) => {
    console.log("Route /api/customer appelée");
    res.json(customer);
});

// Démarrer le serveur sur le port 5000
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});