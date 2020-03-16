function sum(firstNumber, secondNumber) {

    let result = '';
    let overflow = 0;

    if (typeof firstNumber !== 'string' || typeof secondNumber !== 'string') {
        result = 'incorrect inputs';
    }
    else {

        firstNumber = firstNumber.split('');
        secondNumber = secondNumber.split('');
        if (firstNumber.length > secondNumber.length) {

            let emptyArray = new Array(firstNumber.length - secondNumber.length);
            secondNumber = emptyArray.concat(secondNumber);
        }
        else {

            let emptyArray = new Array(secondNumber.length - firstNumber.length);
            firstNumber = emptyArray.concat(firstNumber);
        }

        for (let i = firstNumber.length - 1; i >= 0; i--) {

            let x = isNaN(Number(firstNumber[i])) === true ? 0 : Number(firstNumber[i]);
            let y = isNaN(Number(secondNumber[i])) === true ? 0 : Number(secondNumber[i]);

            if (x + y + overflow >= 10) {

                result = ((x + y + overflow) - 10) + result;
                overflow = 1;
            }
            else {
                result = (x + y + overflow) + result;
                overflow = 0;
            }
        }
    }
    return result;
}