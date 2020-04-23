const fs = require('fs');

module.exports = () => {
  try {
    const readCsv = fs.readFileSync('routes.csv', 'utf8');
  const routesToJson = readCsv.split(/\n|\r\n/).map((data) => {
    let values = data.split(',');
    let [from, ...last] = values;
    if (values.length > 3) {
      let price = last.pop();
      let to = last.pop();
      let joined = last.join();
      return {
        from: from,
        conexion: joined,
        to: to,
        price: parseFloat(price)
      }
    }
    return {
      from: from,
      to: last[0],
      price: parseFloat(last[1])
    }
  });
  return routesToJson;
  }catch (err){
    console.log(err);
  }
  
}
