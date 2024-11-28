export const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products');

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products = await response.json();
        return products;
    } catch (error) {
        //console.error('Error fetching products:', error);
        return import('@/mock/products').then(module => module.default);
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`/api/products/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        const product = await response.json();
        return product;
    } catch (error) {
        // console.error('Error fetching product:', error);
        const { default: mockProducts } = await import('@/mock/products');
        return mockProducts.find(product => product.id === id);
    }
}