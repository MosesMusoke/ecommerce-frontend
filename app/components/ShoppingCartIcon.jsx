
import { useCart } from '../contexts/cartContext';
import { MdOutlineShoppingCart } from 'react-icons/md';

const ShoppingCartIcon = () => {
  const { cart } = useCart();

  return (
    <div style={{ position: 'relative' }}>
      <MdOutlineShoppingCart size={24} color="black" />
      {cart.totalQuantity > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '4px 8px',
          }}
        >
          {cart.totalQuantity}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;


