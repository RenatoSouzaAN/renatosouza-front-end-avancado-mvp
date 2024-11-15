"use client"
import { useState } from 'react';
import MinusIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddCart from '@mui/icons-material/AddShoppingCart';
import CreditCard from '@mui/icons-material/CreditCard';
import OpenInBrowser from '@mui/icons-material/OpenInBrowser';
import Link from 'next/link';
import useCart from '@/hooks/useCart';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart, handleBuyNow } = useCart();

    const increaseQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    return (
        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md transform motion-safe:hover:scale-105 transition duration-300">
            <Link href={`/products/${product.id}`}>
                <div className="h-60 bg-gray-100 flex items-center justify-center relative">
                    <div className='absolute top-2 right-2 z-10'>
                        <OpenInBrowser className='text-primary'/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center border-2 border-gray-200">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      layout='fill'
                      className="w-full h-full"
                    />
                    </div>
            </div>
            </Link>
            
            <div className="p-4 bg-primary text-on-primary">
                <h3 className="text-3xl mb-2">{product.title}</h3>
                <p className="text-base mb-2">Preço: R${product.price.toFixed(2)}</p>

                <div className="flex items-center mb-3">
                    <span className='mr-2'>Quantidade: </span>
                    <div className='flex items-center border rounded-xl bg-white'>
                        <button
                            onClick={decreaseQuantity}
                            className='px-2 py-1 text-primary hover:bg-gray-100  rounded-tl-xl rounded-bl-xl flex items-center'
                        >
                            <MinusIcon />
                    </button>
                    <input type='text' value={quantity} className='w-8 text-center text-primary' readOnly></input>
                        <button
                            onClick={increaseQuantity}
                            className='px-2 py-1 text-primary hover:bg-gray-100  rounded-tr-xl rounded-br-xl flex items-center'
                        >
                            <AddIcon />
                    </button>
                    </div>
                </div>

                <div className='flex gap-2 flex-col'>
                    <button
                        onClick={() => handleAddToCart(product, quantity)}
                        className='flex-1 px-4 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 flex items-center justify-center'
                    >
                        <AddCart className='mr-2'/>
                            Adicionar ao carrinho
                    </button>
                    <button
                        onClick={() => handleBuyNow(product, quantity)}
                        className='flex-1 px-4 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 flex items-center justify-center'
                    >
                            <CreditCard className='mr-2'/>
                                Comprar Agora
                    </button>
                </div>
            </div>
            
        </div>


    )
}

export default ProductCard;