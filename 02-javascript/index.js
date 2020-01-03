'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
ANSWER --> realiza una peticion http hacia una URI en especifico para consumir un endpoint donde retorna la respuesta en formato json. Implementacion basada en promesas.
- How it's used? Add different use-case examples that covers every functionality.
ANSWER -->  apiBaseUrl como referencia a locahost:3000/v1/, endpoint como referencia a algun recurso REST de dicha API
1.- requester('GET', 'apiBaseUrl/endpoint');
2.- requester('POST', 'apiBaseUrl/endpoint', { 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Origin', '*' });
3.- requester('PUT', 'apiBaseUrl/endpoint/:id', { 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Origin', '*' });
4.- requester('PATH', 'apiBaseUrl/endpoint/:id' { 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Origin', '*' });
5.- requester('DELETE', 'apiBaseUrl/endpoint/:id');
- How it is called this design pattern or technique?
ANSWER --> Creo que es un Structural patter - Adapter. Adicionalmente es una funcion isomorfica

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch

function requester(method, base, headers = { Accept: '*/*' }) {
    return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers })
        .then(r => r.json());
}