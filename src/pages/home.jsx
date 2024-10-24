import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import fetchAllProducts from '../utilities/fetch';
import Card from '../components/card';
import Button from '../components/button';

function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                let result = await fetchAllProducts();
                console.log(result);

                setProducts(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    if (loading)
        return (
            <div
                id="products-container"
                className="flex gap-4 mt-2 flex-wrap justify-center"
            >
                Loading...
            </div>
        );
    if (error)
        return (
            <div
                id="products-container"
                className="flex gap-4 mt-2 flex-wrap justify-center"
            >
                Error: {error}
            </div>
        );

    return (
        <div
            id="products-container"
            className="flex gap-4 mt-2 flex-wrap justify-center"
        >
            {products.map((product) => (
                <Card
                    key={product.id}
                    title={product.title}
                    buttonAdd={
                        <Button
                            label="Add to cart"
                            color="amber"
                            onClick={() => handleAddToCart(product)}
                        />
                    }
                    buttonRemove={
                        <Button
                            label="Remove from cart"
                            color="amber"
                            onClick={() => handleRemoveFromCart(product)}
                        />
                    }
                />
            ))}
        </div>
    );
}

export default Home;
