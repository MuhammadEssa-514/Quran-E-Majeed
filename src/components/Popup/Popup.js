// Popup.js
import React from 'react';

const Popup = ({ isVisible, onClose, heading }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-yellow-500 p-6 rounded-lg text-center">
        <h2 className="text-yellow-500 text-3xl font-bold">{heading}</h2>
        <button 
          className="mt-4 p-2 bg-yellow-700 text-white rounded hover:bg-yellow-600" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
