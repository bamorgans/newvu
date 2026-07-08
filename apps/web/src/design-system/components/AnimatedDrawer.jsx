export function AnimatedDrawer({ open, children }) {
  if (!open) return null;

  return <aside className="animated-drawer">{children}</aside>;
}
