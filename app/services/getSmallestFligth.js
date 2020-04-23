module.exports = (array, from, to) => {
    try {
        let sameFlight = [];
    let minNum = array[0].price;
    for (let i = 0; i < array.length; i++) {
        const el = array[i]
        if (
            el.from === from &&
            el.to === to &&
            el.price <= minNum) {
            minNum = el.price;
            sameFlight.push(el);
        }
    }
    let result = []
    for (let j = 0; j < sameFlight.length; j++) {
        const el = sameFlight[j];
        if (el.price === minNum) {
            result.push({
                route: `${el.from},${el.conexion ? el.conexion + ',' : ''}${el.to}`,
                price: el.price
            })
        }
    }
    return result.length === 1 ? result[0] : result   
    } catch (error) {
        console.log(err);
    }
}