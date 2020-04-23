const fs = require('fs');

module.exports = writeNormalRoute = (from, to, price) => {
    try {
        fs.appendFileSync('routes.csv', `\n${from},${to},${price}`, (err) => {
            console.log(err)
        });
        return {
            from,
            to,
            price
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = writeConnectionRoute = (from, to, connection, price) => {
    try {
        fs.appendFileSync('routes.csv', `\n${from},${to},${connection},${price}`, (err) => {
            console.log(err)
        });
        return {
            from,
            to,
            connection,
            price
        }
    } catch (err) {
        console.log(err);
    }

}