"use client";
import React from "react";

const Pricing = () => {
  return (
    <div className="text-white py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Subscription Business Model</h1>
        <p className="text-lg">Flexible pricing to meet your compliance needs.</p>
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Individual Plan */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Individual</h2>
          <p className="text-lg mb-6 text-cyan-500">1st device free.</p>
          <p className="text-gray-600">Ideal for personal use and testing.</p>
        </div>

        {/* Team Plan */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Team</h2>
          <p className="text-lg mb-6 text-cyan-500">$29/month - Up to 10 devices.</p>
          <p className="text-gray-600">Perfect for small teams.</p>
        </div>

        {/* Business Plan */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Business</h2>
          <p className="text-lg mb-6 text-cyan-500">$79/month - Up to 50 devices.</p>
          <p className="text-gray-600">Designed for SMBs.</p>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
          <p className="text-lg mb-6 text-cyan-500">Custom pricing.</p>
          <p className="text-gray-600">Tailored for large organizations.</p>
        </div>
      </div>

      {/* Add-On Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Add-On</h2>
        <p className="text-lg">
          <span className="font-bold">Extra Compliance:</span> Industry-specific
          compliance tools available for $50/month.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
