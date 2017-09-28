module.exports = function multiply(first, second) {
    let firstNum = first.split('').reverse();
    let secondNum = second.split('').reverse();
    let result = [];
    result.length = firstNum.length + secondNum.length;

    for(let i=0;i<result.length;i++)
        result[i] = 0;

    for (let i = 0; firstNum[i] >= 0; i++) {
        for (let j = 0; secondNum[j] >= 0; j++) {
            result[i + j] += firstNum[i] * secondNum[j];
        }
    }

    let temp = 0;
    for (let i = 0; i < result.length; i++) {
        result[i] += temp;
        temp = parseInt(result[i] / 10);
        result[i] = result[i] % 10;
    }

    if( result[result.length-1] ===0){
        result.pop();
    }
    return result.reverse().join('');
};
