const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`ERROR ${urlApi}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send()
}

fetchData(`${API}/products`, (error, products) => {
    if (error) return console.error(error);
    fetchData(`${API}/products/${products[0].id}`, (error, product) => {
        if(error) return console.error(error);
        fetchData(`${API}/categories/${product?.category?.id}`, (error, category) => {
            if (error) return console.error(error);
            console.log(products[0], '\n', product.title, '\n', category.name);
        })
    })
})
