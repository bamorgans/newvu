export function Layout({ children }) {
  return (
    <div className="newvu-layout">
      <nav className="glass">
        <h2>NewVu</h2>
        <a>Dashboard</a>
        <a>Interviews</a>
        <a>Analysis</a>
        <a>Review Studio</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}
