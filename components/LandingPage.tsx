
import React from 'react';
import { Product } from '../types';

interface LandingPageProps {
  product: Product;
}

const LandingPage: React.FC<LandingPageProps> = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
          src={product.productInfo.imageUrl}
          alt={product.productInfo.name}
        />
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {product.productInfo.name}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {product.productInfo.description}
          </p>
           <div className="mt-8 p-6 bg-brand-blue-50 border-l-4 border-brand-blue-500 rounded-r-lg">
            <h2 className="text-xl font-semibold text-brand-blue-800 mb-2">Our Aspiration</h2>
            <p className="text-brand-blue-900 italic">
              "{product.productInfo.aspiration}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
