export function DrawerManager({ drawer, children }) {
  if (!drawer) return null;

  return <aside className="drawer-manager">{children}</aside>;
}
