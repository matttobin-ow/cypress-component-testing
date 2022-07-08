export default function Header({ text = 'Cypress Component Testing' }: { text: string }) {
  return (
    <header className="py-4">
      <h1 className="text-2xl">{text}</h1>
    </header>
  );
}
