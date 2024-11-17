'use client';
import { useEffect, useState } from 'react';
import MinusIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const QuantityButtons = ({
    initialQuantity = 1,
    maxQuantity = Infinity,
    onQuantityChange,
    buttonStyles = {},
    inputStyles = {},
    containerStyles = {},
    currentQuantity 
}) => {

    const [quantity, setQuantity] = useState(currentQuantity || initialQuantity);

    useEffect(() => {
        if (currentQuantity !== undefined) {
            setQuantity(currentQuantity);
        }
    }, [currentQuantity]);

    const increaseQuantity = () => {
        if (quantity < maxQuantity) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange?.(newQuantity);
        };
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange?.(newQuantity);
        };
    };
    
    return (
        <div className={`flex items-center ${containerStyles}`}>
            <button
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className={`px-2 py-1 ${buttonStyles.decrease || ''} ${
                    quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                <MinusIcon />
            </button>
  
            <input
                type='text'
                value={quantity}
                readOnly
                className={`flex items-center w-10 py-1 text-center ${inputStyles}`}
            />
  
            <button
                onClick={increaseQuantity}
                disabled={quantity === maxQuantity}
                className={`px-2 py-1 ${buttonStyles.increase || ''} ${
                    quantity === maxQuantity ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                <AddIcon />
            </button>
        </div>
    );
};

export default QuantityButtons;