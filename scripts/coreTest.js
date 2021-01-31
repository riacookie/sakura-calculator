let test = '5+5*2-3/3';
let test2 = '10-4';
let test3 = '5- 5 -5 *3';

function isEqual(inputCallBack, test, epxected) {
    let input = inputCallBack(test);
    let isEqual = false;
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] != epxected[i]) {
                isEqual = false;
                break;
            }
            else {
                isEqual = true;
            }
        }
    }
    else {
        if (input === epxected) isEqual = true;
        else isEqual = false;
    }

    if (isEqual) {
        console.log(`${input} === ${epxected} => OK`);
    }
    else {
        console.log(`${input} didn't match ${epxected}`);
    }
}

isEqual(tokenize, test, [ 5, '+', 5, '*', 2, '-', 3, '/', 3 ]);
isEqual(tokenize, test2, [ 10, '-', 4 ]);
isEqual(tokenize, test3, [ 5, '-', 5, '-', 5, '*', 3 ]);

isEqual(evaluatePriorities, test, [ 5, '+', 10, '-', 1 ]);
isEqual(evaluatePriorities, test2, [ 10, '-', 4 ]);
isEqual(evaluatePriorities, test3, [ 5, '-', 5, '-', 15 ]);

isEqual(evaluate, test, 14);
isEqual(evaluate, test2, 6);
isEqual(evaluate, test3, -15);
