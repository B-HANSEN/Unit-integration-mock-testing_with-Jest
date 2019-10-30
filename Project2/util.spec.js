const { generateText, checkAndGenerate } = require('./util')

// ES6 not natively supported by Jest:
// import { generateText } from './util';

// UNIT TEST:
test('should output name and age', () => {
    const text = generateText('Bjoern', 38);
    expect(text).toBe('Bjoern (38 years old)');

    // check for false positives
    const text2 = generateText('Irina', 36);
    expect(text2).toBe('Irina (36 years old)');
});

// alternative: check for opposites, in case code is broken in js-file
test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

// alternative: if no parameters are passed
test('should output data-less text', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
});



// INTEGRATION TEST
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Bjoern', 38);
    expect(text).toBe('Bjoern (38 years old)');
});



// UI/ e2e-testing candidate: addUser(), many other functions/ dependencies
// because it neither takes any parameters nor returns an output
