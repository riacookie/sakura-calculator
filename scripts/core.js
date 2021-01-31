function getSum(number) {
    let sum = 0;
    for (let num of number.toString()) {
        sum += Number(num);
    }
    return sum;
}

function getSumSpaceInt(number) {
    let sum = 0;
    for (let num of number.split(' ')) {
        sum += Number(num);
    }
    return sum;
}

function evaluate(input) {
    let tokens = evaluatePriorities(input);
    let res = tokens[0];
    for (let i = 1; i < tokens.length; i += 2) {
        if (tokens[i] === '+') {
            res += tokens[i + 1];
        }
        else if (tokens[i] === '-') {
            res -= tokens[i + 1];
        }
    }
    return res;
}

function evaluatePriorities(input) {
    let tokens = tokenize(input);
    let current = tokens[0];
    let res = [];
    for (let i = 1; i < tokens.length; i += 2) {
        if (tokens[i] === '*') {
            current *= tokens[i + 1];
        }
        else if (tokens[i] === '/') {
            current /= tokens[i + 1];
        }
        else if (tokens[i] === '+' || tokens[i] === '-') {
            res.push(current);
            res.push(tokens[i]);
            current = tokens[i + 1];
        }
    }
    res.push(current);
    return res;
}

function tokenize(input) {
    input = input.replace(/\s+/g, '');
    let tokens = [];
    let temp = '';

    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            temp += input[i];
        }
        else {
            tokens.push(Number(temp));
            temp = '';
            tokens.push(input[i]);
        }
    }
    tokens.push(Number(temp));

    return tokens;
}
