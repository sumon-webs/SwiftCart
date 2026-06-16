export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-blue-600 dark:text-blue-500 font-sans">
                Swift<span className="text-orange-500">Cart</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Experience the fastest online shopping with premium products
              delivered straight to your doorstep.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Electronics</li>
              <li>Jewelry</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} SwiftCart Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
