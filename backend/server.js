import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('Server is ready')
})
app.get('/api/joke', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Atomic Trust Issues",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Programmer's Dilemma",
            content: "Why did the programmer quit his job? Because he didn't get arrays!"
        },
        {
            id: 3,
            title: "Cow Bells",
            content: "Why do cows wear bells? Because their horns don't work!"
        },
        {
            id: 4,
            title: "Scarecrow Award",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 5,
            title: "Fake Spaghetti",
            content: "What do you call fake spaghetti? An impasta!"
        }
    ];
    res.send(jokes)
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
