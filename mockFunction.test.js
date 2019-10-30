let addMock = require('./mockFunction');
// const newtotal = require('./mockFunction');


// define mock function
addMock = jest.fn(() => 3);


test('addMock', () => {
    expect(addMock(1,2)).toBe(3);
    expect(addMock(1,2)).toBe(3);
    // e.g. to mark an API call to ensure it was called or a button-click
    expect(addMock).toHaveBeenCalledTimes(2);
    // e.g. checking if method is called with proper arguments (e.g. from form fields or props)
    expect(addMock).toHaveBeenCalledWith(1, 2);
});


