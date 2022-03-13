const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxArr(arr) {
    let sumMax = 0;

    let sumElem = 0;

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
let prices = [7,6,4,3,1];

function maxProfit(array) {
    let sum = 0;
    let sumElem = 0;
    let result = 0;
    let arrayNew = array.slice();

    if(array.join('') == arrayNew.sort((a, b) => a - b).join('')) {
        return array[array.length - 1] - array[0];
    } else {
        check: for(let i = 0; i < array.length - 1; i++) {
            for(let j = i + 1; j < array.length; j++) {
                if(array[i] > array[j]) {
                    continue check;
                } else {
                    sumElem = array[j] - array[i];
                    if(sum < sumElem) {
                        sum = sumElem;
                        result += sumElem;
                    } else {
                        sum = 0;
                        continue check;
                    } 
                }
            }
        }
    }
    return result;
}

console.log(`Mаксимальная прибыль: ${maxProfit(prices)}`);

