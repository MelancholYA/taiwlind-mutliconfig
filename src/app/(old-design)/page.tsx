import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex text-center justify-center flex-col  gap-8 row-start-2 items-center sm:items-start bg-primary/10 text-primary rounded-lg shadow-strong p-8 max-w-4xl w-full">
        <div>
          <h2 className="text-4xl font-sans capitalize text-primary mb-6">
            Two Configs , one repo , interconnected routing
          </h2>
          <p className="text-muted mb-4">
            Main page of the old design layout, featuring serif fonts, muted
            colors, and classic styling.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/designs/new"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
            >
              New Design
            </Link>
            <Link
              href="/designs/old"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
            >
              Old Design
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
