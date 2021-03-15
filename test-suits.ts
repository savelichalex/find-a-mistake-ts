const foo = require('./index').foo;

function assert(income: string, desired: string) {
    if (income !== desired) {
        console.error('Incorrect!', `"${income}" is not equal to "${desired}"`);
    } else {
        console.log('Correct');
    }
}

assert(foo('', ' '), '');
assert(foo('0', ' '), '0');
assert(foo('00', ' '), '00');
assert(foo('000', ' '), '000');
assert(foo('0000', ' '), '000 0');
assert(foo('00000', ' '), '000 00');
assert(foo('000000', ' '), '000 000');
assert(foo('0000000', ' '), '000 000 0');
assert(foo('0000000', ','), '000,000,0');
