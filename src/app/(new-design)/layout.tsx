import "./new.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="new">
      <div className="h-screen">{children}</div>
    </div>
  );
}
