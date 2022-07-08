import ICartItem from '../../types/cart-item';

interface ICartItemProps extends ICartItem {
  onRemove: (id: number) => void;
}

export default function CartItem({ id, name, quantity, onRemove }: ICartItemProps) {
  const removeItem = () => {
    onRemove(id);
  };

  return (
    <div data-testid="cart-item" className="flex w-full justify-between bg-white border-b border-b-blue-500 py-2 px-4">
      <div>
        <span data-testid="item-name" className="font-semibold">
          {name}
        </span>{' '}
        | Qty. <span data-testid="quantity">{quantity}</span>
      </div>
      <button onClick={removeItem} className="text-red-500">
        Remove
      </button>
    </div>
  );
}
