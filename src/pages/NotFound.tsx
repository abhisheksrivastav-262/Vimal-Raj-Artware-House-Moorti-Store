import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-obsidian text-ivory text-center px-4 py-24 sm:py-32">
      <p className="text-gold font-display text-7xl sm:text-8xl font-bold">404</p>
      <h1 className="font-display text-2xl sm:text-3xl mt-4">This page drifted away like incense smoke.</h1>
      <p className="text-ivory/60 text-sm mt-3">The link may be old — but our brass collection is very much here.</p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link to="/" className="bg-gold text-obsidian font-semibold px-8 py-3.5 rounded-full text-sm">Back to Homepage</Link>
        <Link to="/products" className="border border-ivory/30 font-semibold px-8 py-3.5 rounded-full text-sm">Browse Products</Link>
      </div>
    </div>
  );
}
