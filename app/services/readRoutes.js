const fs = require('fs');

module.exports = () => {
  const readCsv = fs.readFileSync('routes.csv', 'utf8');
  const routesToJson = readCsv.split(/\n|\r\n/).map((data) => {
    let values = data.split(',');
    return obj = {
      from: values[0],
      to: values[1],
      price: parseFloat(values[2])
    }
  });
  return routesToJson;
}
