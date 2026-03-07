export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 py-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-2">

        <h3 className="text-lg font-semibold tracking-wide">
          PLS CONSTRUCTION MATERIALS
        </h3>

        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} PLS Construction Materials. All rights reserved.
        </p>

      </div>
    </footer>
  );
}