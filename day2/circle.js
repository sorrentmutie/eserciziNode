//const PI = Math.PI;
console.log("Siamo in circle");

exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;

exports.areaAsync = (r) => {
   return new Promise( (resolve) => {
    setTimeout( () => {
        resolve(  r * r * Math.PI);
     } ,2000); 
   });
};


// exports.myfunctions = {
//     area: this.area,
//     corcum: this.circumference
// }