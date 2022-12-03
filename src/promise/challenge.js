import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);
}

// fetchData(`${API}/products`)
//     .then( response => response.json() )
//     .then( products => console.log(products) )
//     .then( () => console.log('Hola') )
//     .catch( error => console.error(error) );

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log('All products: ', products);
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log('Product: ', product);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => console.log('Category: ', category.name))
    .catch(err => console.error(err))
    .finally(() => console.log('Finally'));