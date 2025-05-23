import "./old.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="old ">
      <div className="h-screen w-screen grid place-items-center">
        {children}
      </div>
    </div>
  );
}
