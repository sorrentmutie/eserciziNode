let a:number = 5;
const b:string = "Hello, world";
const c: boolean = false;


const d: number[] = [1,2,3];
let d1: number[] = [];
let d11 = [];



d1.push(1);

let d2: Array<number> = [1,2,3];

enum MyColor {
  Red, Green,Blue
}

// 0, 1, 2


enum MyColor2 {
    Red = 10, Green = 20,Blue = 30
}
  
let e: MyColor = MyColor.Green;


function SommaJavaScript(a: any,b: any) {
    return a + b;
}

function Somma(a: number, b:number): number {
    return a+ b;
}

function StampaSomma(a: number, b: number) : void {
    console.log(a+b);
}


const x = SommaJavaScript(1,"2");
console.log(x);

const y = Somma(1,2);
console.log(y);

const z = StampaSomma(2,3);
//console.log(z);


let x1: number | undefined ;

if(x1) {
    console.log(x1);
} else {
    console.log("x1 è undefined");
}


//console.log(x1);
// x1 = 5;

type ID = number | undefined;
let x2: ID;

console.log(x2);
//x2 = 6;
//console.log(x2);

x2 = 6;
if(x2){
    let x3 = x2 + 1;
    console.log(x3);
}




