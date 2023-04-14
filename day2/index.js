function concat(a,b, callback) {
    console.log("Sono in concat");
    console.log(callback);
    setTimeout( () => {
        const con = a + b;
        callback(con);
        }, 1000); 
}

function concatPromise(a,b) {
    return new Promise( resolve  => {
        console.log("Sono in concat Promise");
        console.log(resolve);
        concat(a,b, resolve);
    });
}


// const p = concatPromise("hello", "world");
// console.log(p);
// p.then( c1 => console.log(c1));


function upper(a, callback) {
    console.log("Sono nella funzione upper");
    setTimeout(
        () => {
            console.log("Sono nella seconda funzione di callback");
            const u = a.toUpperCase();
            callback(u);
        }, 1000);
}

function upperPromise(a) {
    return new Promise(resolve => {
        upper(a, resolve);
    });
}

function decor(a,callback) {
    setTimeout(() => {
        const d = "**" + a + "**";
        callback(d);
    }, 1000);
}

function decorPromise(a) {
    return new Promise( resolve => {
        decor(a, resolve);
    });
}

// concat("hello", "world", c1 => {
//     console.log("c1=" + c1);
//     console.log("Sono nella prima funzione di callback");
//     upper(c1, c2 => {
//         console.log("c2=" + c2);
//         decor(c2, c3 => {
//             console.log("Sono nella funzione  decor");
//             console.log(c3);
//         });
//     });
// });

// const p = concatPromise("hello", "world")
//  .then( upperPromise)
//  .then( decorPromise)
//  .then( console.log);





// async function Prova() {
//     const X = await concatPromise("hello", "world");
//     console.log(X);
// }


(async () => {
    const X = await concatPromise("hello", "world");
    const Y = await upperPromise(X);
    const Z = await decorPromise(Y);
    console.log(Z);
})();

