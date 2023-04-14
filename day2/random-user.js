const fetch = require('node-fetch');
const url = "https://randomuser.me/api";

//const request = fetch(url);


// const x = request
// .then( response => {
//     console.log(response);
//     const statusCode = response.status;
//     if(statusCode === 404) {
//         console.log("Errore 404");
//     } else {
//         console.log(statusCode);
//     }
//     return response;
// })
// .catch( error => console.log(error));

// console.log(x);
// const y = x.then( response => {
//     return response.json();
// });
// y.then( data => console.log(data));

// let myData = {};
// const x = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error));
// console.log("Sono qui");
// console.log(myData);


(async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
})();



