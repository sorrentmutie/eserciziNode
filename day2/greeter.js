// module.exports = ( arg ) => {
//     console.log("Ciao, " + arg);
// };

console.log("Siamo in greeter");


module.exports = {
    name: "Salvatore",
    surname: "Sorrentino",
    getFullName: function() {  return this.name + " " + this.surname; },
    hello: (arg) => console.log ("Ciao, " + arg)
};