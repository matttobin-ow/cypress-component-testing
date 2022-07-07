import { useRecoilState } from 'recoil';
import { cartAtom } from '../../store/cart';
import CartItem from '../CartItem/CartItem';

export default function Cart() {
  const [items, setItems] = useRecoilState(cartAtom);

  const handleRemove = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="p-4 bg-blue-500">
      {items.map((item) => (
        <CartItem itemId={item.id} itemName={item.name} quantity={item.quantity} onRemove={handleRemove} />
      ))}
    </div>
  );
}
