import React from 'react';
import { Product, Page } from '../types';

interface HeaderProps {
  products: Record<string, Product>;
  selectedProductId: string;
  onProductChange: (productId: string) => void;
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({
  products,
  selectedProductId,
  onProductChange,
  activePage,
  onPageChange,
}) => {
  const NavButton: React.FC<{ page: Page; label: string }> = ({ page, label }) => (
    <button
      onClick={() => onPageChange(page)}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        activePage === page
          ? 'bg-brand-blue-600 text-white'
          : 'text-gray-600 hover:bg-brand-blue-100 hover:text-brand-blue-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-brand-blue-700">YYZ</h1>
            <h2 className="text-xl font-light text-gray-600">Strategy Suite</h2>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <select
                id="product-select"
                value={selectedProductId}
                onChange={(e) => onProductChange(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 sm:text-sm rounded-md shadow-sm appearance-none"
              >
                {
                  // FIX: Explicitly type the 'product' variable to resolve type inference issue where it was being treated as 'unknown'.
                  Object.values(products).map((product: Product) => (
                    <option key={product.id} value={product.id}>
                      {product.productInfo.name}
                    </option>
                  ))
                }
              </select>
            </div>
            <nav className="hidden md:flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
              <NavButton page="landing" label="Landing" />
              <NavButton page="input" label="Input" />
              <NavButton page="output" label="Output" />
            </nav>
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      <nav className="md:hidden flex items-center justify-around space-x-2 bg-gray-100 p-2 border-t">
        <NavButton page="landing" label="Landing" />
        <NavButton page="input" label="Input" />
        <NavButton page="output" label="Output" />
      </nav>
    </header>
  );
};

export default Header;