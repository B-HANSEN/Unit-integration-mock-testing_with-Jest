// export functions frmo a util.js file allows to import elsewhere from this file only
// moving functions out of app.js which would execute the functions and thus hitting the real DOM

const { fetchData } = require('./http');

const loadTitle = () => {
    return fetchData().then(extractedData => {
      const title = extractedData.title;
      const transformedTitle = title.toUpperCase();
      return transformedTitle;
    });
  };
  
  
// standard JS behaviour: return statements inside of callbacks/ promise.then-calls
// return value of the inner function
const printTitle = () => {
    loadTitle().then(title => {
      console.log(title);
      return title;
    });
};

exports.printTitle = printTitle;
exports.loadTitle = loadTitle;