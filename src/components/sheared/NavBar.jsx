import Link from "next/link";
import { ThemeSwitch } from "../Theming";

export default function Navbar() {
  return (
    // 'bg-white' লাইট মোডের জন্য, 'dark:bg-zinc-900' ডার্ক মোডের জন্য
    // 'border-gray-200' লাইট মোডের জন্য, 'dark:border-zinc-800' ডার্ক মোডের জন্য
    <nav className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-blue-600 font-sans">
                Swift<span className="text-orange-500">Cart</span>
              </span>
            </Link>
          </div>

          {/* Right: Theme Switcher */}
          <div className="flex items-center gap-4">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
