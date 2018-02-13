const fetch = require('node-fetch');

const a = fetch("https://swapi.co/api/people/?format=json")
  .then((res) => res.json())
  .then((json) => console.log(json));

