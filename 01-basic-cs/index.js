'use strict';

console.log(`
1.
---

There is database of users and their hats at './database.json'.
Find the total sum of the top-3 most selling hats.
We don't care which hats are.
You can use lodash/underscore (recommended)

What is the complexity in O() notation of time and space?
ANSWER --> es una forma matematica de medir que tan rapido crece un algoritmo en tiempo y espacio, lo cual indica cuantas operaciones realiza y que tan eficiente es.

IMPORTANT: Find a balance between performance and legibility (more important).

---
Example:
Imagine the following (taken from the real database):

Hat(7adbc650-2a5e-4e59-b88f-97377e0b7e34) sold 7.
Hat(872f5fc4-515f-416d-9ec6-3488da2bd74a) sold 6.
Hat(048d8fbf-7653-461f-a59c-68c73b8855e5) sold 7.
Hat(32266d28-5092-4a69-afb3-90fafd46e04a) sold 9.

-> Expected result: 7 + 7 + 9 => 23
`);

const _ = require('lodash'); // https://lodash.com/docs/4.17.4
const assert = require('assert');

const database = require('./database.json');


let total = 0 // TODO
const filterHats = {};
// part 1
const hatsList = database.map(items => items.hats).filter(hats => hats.length > 0);

// part 2
hatsList.forEach(element => {
    element.forEach((item) => {
        filterHats[item.id] = (filterHats[item.id] || 0) + 1;
    });
});

// part 3
total = Object.values(filterHats).sort((current, prev) => prev - current).slice(0, 3).reduce((current, prev) => current + prev);

console.log(` Big O notation results
    Part 1 Map and filter  0(n) + 0(n)
    Part 2 O(n^2)
    Part 3 O(n) + O(n) + O(n)
`)


// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`);

console.log('Success!');