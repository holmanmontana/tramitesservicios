import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
      <div className="text-emerald-600 mb-4 group-hover:text-emerald-800 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{description}</p>
      <div className="mt-4 w-12 h-1 bg-emerald-300 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
    </div>
  );
};

export default ServiceCard;


// DONE