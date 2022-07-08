export default function CartItem({
  itemId,
  itemName,
  quantity,
  onRemove,
}: {
  itemId: number;
  itemName: string;
  quantity: number;
  onRemove: (itemId: number) => void;
}) {
  const removeItem = () => {
    onRemove(itemId);
  };

  return (
    <div data-testid="cart-item" className="flex w-full justify-between bg-white border-b border-b-blue-500 py-2 px-4">
      <div>
        <span data-testid="item-name" className="font-semibold">
          {itemName}
        </span>{' '}
        | Qty. <span data-testid="quantity">{quantity}</span>
      </div>
      <button onClick={removeItem} className="text-red-500">
        Remove
      </button>
    </div>
  );
}
