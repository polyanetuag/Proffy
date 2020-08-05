import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {name: 'Ana', age: 20},
        {name: 'Saulo', age: 32},
    ];
    return response.json(users);
});

app.listen(3333);