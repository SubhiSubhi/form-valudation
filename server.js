const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let submissions = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/acess/index.html');
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).send('All fields are required');
        return;
    }
    submissions.push({ name, email, message });
    console.log('Submitted data:', { name, email, message }); // Log the submitted data
    res.send('Form submitted successfully');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
