// in http.js, using get()-method of the axios object
// faking the response from axios which has a data key
// mocking a functionality "one level above" the http.js mock

const get = url => {
    return Promise.resolve({ data: { title: 'delectus aut autem' } });
};

exports.get = get