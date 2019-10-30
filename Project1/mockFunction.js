const addMock = (x, y) =>
    x + y;


const newTotal = (shipping, subTotal) => {
    return '$' + addMock(shipping, subTotal);
}

module.exports = addMock, newTotal;