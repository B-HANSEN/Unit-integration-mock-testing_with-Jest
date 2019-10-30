// not required: test the API response nor the axious GET-method
// required: test if the util method extracts and transforms the title correctly

// http.js, need to specify: by jest.mock()
// axios.js, jest will automatically use mocks of global node modules

// jest.mock('./http');

const { loadTitle } = require('./util');

// test inner function as the return value refers to the inner function
test('should print an uppercase text', () => {
    loadTitle().then(title => {
        expect(title).toBe('DELECTUS AUT AUTEM');
    });
});