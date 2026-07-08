export function AdminNavigation({ sections = [] }) {
  return (
    <nav className="glass admin-navigation">
      {sections.map(section => (
        <button key={section}>{section}</button>
      ))}
    </nav>
  );
}
