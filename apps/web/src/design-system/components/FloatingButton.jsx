export function FloatingButton({ children, label, onClick }) {
  return (
    <button className="floating-button" onClick={onClick}>
      {children || label}
    </button>
  );
}
