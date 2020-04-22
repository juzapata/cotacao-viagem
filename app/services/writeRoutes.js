const fs = require('fs');

module.exports = (from, to, price) => {
    fs.appendFileSync('routes.csv', `\n${from},${to},${price}`, (err) => {
        console.log(err)
    });
}
