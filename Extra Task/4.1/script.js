// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr = [-2, -1, -3, -4, -1, -2, -1, -5, -4];

function maxArr(arr) {
    let sumMax = 0;
    let sumElem = 0;

    let maxElem = Math.max.apply(null, arr);

    let posNum = arr.filter(item => item > 0);

    if (posNum.length == 0) {
        return maxElem;
    }

    for (let item of arr) {
        sumElem += item;
        sumMax = Math.max(sumMax, sumElem);
        if (sumElem < 0) {
            sumElem = 0;
        }
    }

    return sumMax;
}

console.log(`Сумма подмассива с наибольшим количеством элементов: ${maxArr(arr)}`);


// let prices = [7, 1, 5, 3, 6, 4];
// let prices = [1, 2, 3, 4, 5];
// let prices = [7, 6, 4, 3, 1];
// let prices = [6, 1, 3, 2, 4, 7];
let prices = [2, 1, 4];

function maxProfit(array) {
    let sum = 0;
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < array[i + 1]) {
            sum += array[i + 1] - array[i];
        }
    }
    return sum;
}

console.log(`Mаксимальная прибыль: ${maxProfit(prices)}`);

