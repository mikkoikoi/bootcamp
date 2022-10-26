
const fetch = require("./node_modules/node-fetch");

async function loadNames() {
    const response = await fetch('./exp.json', {
       method: 'GET'
    });
    const names = await response.json();

    console.log(names);
}

loadNames();