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
    <div data-testid="cartItem">
      <span data-testid="itemName">{itemName}</span> - <span data-testId="quantity">{quantity}</span>{' '}
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}
