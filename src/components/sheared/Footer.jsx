import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-blue-600 dark:text-blue-500 font-sans">
                Swift<span className="text-orange-500">Cart</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Experience the fastest online shopping with premium products delivered straight to your doorstep.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop?category=electronics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Electronics</Link></li>
              <li><Link href="/shop?category=jewelery" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Jewelry</Link></li>
              <li><Link href="/shop?category=men" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Men's Clothing</Link></li>
              <li><Link href="/shop?category=women" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Women's Clothing</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Contact info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Stay Connected
            </h4>
            <p className="text-sm">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} SwiftCart Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}