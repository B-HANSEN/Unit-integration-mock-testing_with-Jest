const add = require('./addUp');
const total = require('./addUp');


// UNIT TEST; only tests one specific unit
test('add', () => {
    const val = add (1, 2);
    expect(val).toBe(3);

    expect(add(1,2)).toBe(3);
    expect(add(2,5)).toBe(7);
});

// INTEGRATION TEST; required for larger application
// e.g. React applications: rendering various components and/ or sequential functions, renders child components

// total function relies on the add function
test('total', () => {
    expect(total(5, 20)).toBe(25)
});