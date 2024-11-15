import AddCart from '@mui/icons-material/AddShoppingCart';
import CreditCard from '@mui/icons-material/CreditCard';

const defaultCartButtonStyles = 'px-4 py-3 bg-background rounded-lg flex items-center justify-center';
const defaultBuyNowButtonStyles = 'px-4 py-3 bg-background rounded-lg flex items-center justify-center';

const CartAndBuyButtons = ({
    handleAddToCart,
    handleBuyNow,
    product,
    quantity,
    containerStyles = {},
    cartButtonStyles = {},
    buyNowButtonStyles = {},
 }) => {
    return (
        <div className={`flex gap-2 flex-col ${containerStyles}`}>
        <button
          onClick={() => handleAddToCart(product, quantity)}
          className={`${defaultCartButtonStyles} ${cartButtonStyles}`}
        >
          <AddCart className="mr-2" />
          Adicionar ao carrinho
        </button>
  
        <button
          onClick={() => handleBuyNow(product, quantity)}
          className={`${defaultBuyNowButtonStyles} ${buyNowButtonStyles}`}
        >
          <CreditCard className="mr-2" />
          Comprar agora
        </button>
      </div>
    )
}

export default CartAndBuyButtons