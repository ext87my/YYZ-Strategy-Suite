
import React, { useState, useCallback } from 'react';
import { Product, Page } from './types';
import { MOCK_DATA } from './constants';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import InputPage from './components/InputPage';
import OutputPage from './components/OutputPage';

const App: React.FC = () => {
  const [products, setProducts] = useState<Record<string, Product>>(MOCK_DATA);
  const [selectedProductId, setSelectedProductId] = useState<string>('yphone');
  const [activePage, setActivePage] = useState<Page>('landing');

  const selectedProduct = products[selectedProductId];

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('landing');
  };

  const handleProductUpdate = useCallback((updatedProduct: Product) => {
    setProducts(prevProducts => ({
      ...prevProducts,
      [selectedProductId]: updatedProduct,
    }));
  }, [selectedProductId]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'input':
        return <InputPage product={selectedProduct} onUpdate={handleProductUpdate} />;
      case 'output':
        return <OutputPage product={selectedProduct} />;
      case 'landing':
      default:
        return <LandingPage product={selectedProduct} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header
        products={products}
        selectedProductId={selectedProductId}
        onProductChange={handleProductChange}
        activePage={activePage}
        onPageChange={setActivePage}
      />
      <main className="p-4 sm:p-6 md:p-8">
        {renderActivePage()}
      </main>
    </div>
  );
};

export default App;
