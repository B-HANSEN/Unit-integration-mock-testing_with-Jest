const add = (x, y) =>
    x + y;

// const add = (x, y) => {
//     return x + y;
// }

const total = (shipping, subTotal) => {
    return '$' + add(shipping, subTotal);
}

module.exports = add, total;