interface Point {
    x: number;
    y: number;
   // z?: number;
}

interface Point2 {
    x: number;
    y: string
}

//const a: Point;
let a3:Point = { x: 5, y: 6};
//let a4:Point = { x: 5};


function GeneraPoint(a:number, b:number): Point {
    return { x: a, y: b};
}

function GeneraPoint2(a:number, b:number): Point2 {
    return { x: a, y: b.toString()};
}

const a5 = GeneraPoint(2,3);
console.log(a5);

