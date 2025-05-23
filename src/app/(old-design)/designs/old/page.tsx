import Link from "next/link";

const page = () => {
  return (
    <div className="relative overflow-hidden p-2 h-full w-full grid place-items-center ">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50" />
      <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-primary/5 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto p-8 md:p-10 bg-white rounded-xl border border-slate-100 shadow-[0_20px_80px_-10px_rgba(0,0,0,0.1)]">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
              <span className="h-1 w-10 bg-primary/30 rounded-full" />
              <span>Old Design System</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-primary">
              Old Design
            </h2>
          </div>

          <p className="text-slate-600 text-lg min-w-96 w-full">
            This is the old design layout
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/designs/new"
              className="group relative overflow-hidden inline-flex items-center justify-center h-12 px-6 font-medium text-white rounded-md"
            >
              <span className="relative z-10">Current Design</span>
              <span className="absolute inset-0 bg-primary/70 group-hover:bg-primary transition-colors duration-300" />
            </Link>

            <Link
              href="/designs/old"
              className="group inline-flex items-center justify-center h-12 px-6 font-medium text-primary border border-primary/20 rounded-md hover:bg-primary-40 transition-colors"
            >
              <span>View Old Design</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
