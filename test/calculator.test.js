// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide, toNumber } from '../calculator.js';
const test = QUnit.test;


test('test adition', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // imputs?
    const x = 11;
    const y = 2; 
    const expected = 13;


    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test subtraction', (expect) => {
    const x = 3;
    const y = 1;
    const expected = 2;

    const actual = subtract(x, y);
    expect.equal(actual, expected);
});

test('test multiply', (expect) => {
    const x = 2;
    const y = 4;
    const expected = 8;
    const actual = multiply(x, y);
    expect.equal(actual, expected);
});

test('test divide', (expect) => {
    const x = 10;
    const y = 1;
    const expected = 10;
    const actual = divide(x, y);
    expect.equal(actual, expected);
});

test('dividez', (expect) => {
    const x = 0;
    const y = 0;
    const expected = 0;
    const actual = divide(x, y);
    expect.equal(actual, expected);
});

test('toNumber', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    const actual = toNumber(input);
    expect.equal(actual, expected);

});
    