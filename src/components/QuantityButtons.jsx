import MinusIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const QuantityButtons = ({
    quantity,
    increaseQuantity,
    decreaseQuantity,
    buttonStyles = {},
    inputStyles = {},
    containerStyles = {},
}) => {
    return (
        <div className={`flex items-center ${containerStyles}`}>
            <button
                onClick={decreaseQuantity}
                className={`px-2 py-1 ${buttonStyles.decrease || ''}`}
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
                className={`px-2 py-1 ${buttonStyles.increase || ''}`}
            >
                <AddIcon />
            </button>
        </div>
    );
};

export default QuantityButtons;