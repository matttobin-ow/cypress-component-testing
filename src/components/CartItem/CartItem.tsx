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
    <div>
      <span data-testid="item-name">{itemName}</span> - <span data-testId="quantity">{quantity}</span>{' '}
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}
