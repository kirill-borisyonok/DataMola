function add(a, b) {
    if (a && b) {
        return a + b;
    } 

    if(a) {
        return (b) => b + a;
    }
}

let add1 = add(1);
let add2 = add1(2);

function sub(a, b) {
    if (a && b) {
        return a - b;
    }

    if(a) {
        return (b) => b - a;
    }
}

function mul(a, b) {
    if (a && b) {
        return a * b;
    }

    if(a) {
        return (b) => b * a;
    }
}

function div(a, b) {
    if (a && b) {
        return a / b;
    }

    if(a) {
        return (b) => b / a;
    }
}

function pipe(...func) {
    return (num) => {
        let result = num;
        for(let item of func) {
            result = item(result);
        }
        return result;
    }
}

let a = add(1, 2);
console.log(a);

let b = mul(a, 10);
console.log(b);

let sub1 = sub(1);
let c = sub1(b);
console.log(c);

let d = mul(sub(a, 1))(c);
console.log(d);

let doSmth = pipe(add(d), sub(c), mul(b), div(a));
let result = doSmth(0);
console.log(result); 

let x = pipe(add(1), mul(2))(3);
console.log(x); 

