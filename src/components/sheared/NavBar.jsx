import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {/* Replace with an <img> tag if you have a physical logo file */}
              <span className="text-2xl font-black tracking-tight text-blue-600 font-sans">
                Swift<span className="text-orange-500">Cart</span>
              </span>
            </Link>
          </div>

          {/* Right: Login Button */}
          <div>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
