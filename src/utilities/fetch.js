const allProductsUrl = 'https://fakestoreapi.com/products';

async function fetchAllProducts() {
    try {
        const result = await fetch(allProductsUrl);
        if (!result.ok) throw new Error('Could not fetch products');
        return await result.json();
    } catch (error) {
        console.error(error);
    }
}

export default fetchAllProducts;
