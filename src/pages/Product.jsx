import React from 'react';

export const Product = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        {/* Decorative icons - would be replaced with actual SVGs */}
        <img 
          src="./assets/images/pricing-icon-1.svg" 
          alt="" 
          className="absolute -top-4 left-20 w-16 h-16 opacity-70"
        />
        <img 
          src="./assets/images/pricing-icon-2.svg" 
          alt="" 
          className="absolute top-12 right-24 w-14 h-14 opacity-70"
        />
        <img 
          src="./assets/images/pricing-icon-3.svg" 
          alt="" 
          className="absolute bottom-4 left-32 w-12 h-12 opacity-70"
        />
        <img 
          src="./assets/images/pricing-icon-4.svg" 
          alt="" 
          className="absolute top-20 left-1/4 w-10 h-10 opacity-70"
        />
        <img 
          src="./assets/images/pricing-icon-5.svg" 
          alt="" 
          className="absolute bottom-8 right-32 w-14 h-14 opacity-70"
        />
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Tools to manage every part of your business
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Felis orci tempor sed in sit aliquam. Sit donec egestas ridiculus 
          porttitor amet. Convallis in pulvinar mauris. Aliquet sit libero convallis 
          quis proin egestas viverra.
        </p>
      </div>

      <div className="w-20 h-1 bg-gray-300 mx-auto mb-12"></div>

      {/* Point of Sale Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Point of sale
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Fast Order Processing</h3>
            <p className="text-gray-600">Speed up order processing in your restaurant with customizable sales screen and item modifiers</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Discount Management</h3>
            <p className="text-gray-600">Easily apply discounts and run effective corrections</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Flexible Order Management</h3>
            <p className="text-gray-600">Create, save, and edit orders, letting customers pay when it's convenient</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Refund System</h3>
            <p className="text-gray-600">Offer full or partial refunds for customer conversions</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Cash Tracking</h3>
            <p className="text-gray-600">Keep track of cash movements, including sales, refunds, pay-ins/outs, and the expected cash amount in a drawer</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Offline Capability</h3>
            <p className="text-gray-600">Record sales offline and the data will automatically sync when the internet connection is restored</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200">
          Explore Now
        </button>
      </div>
    </div>
  );
};