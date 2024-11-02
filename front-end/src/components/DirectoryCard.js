import React, { useState } from 'react';
import Card from '../components/Card'; // Import the original Card component

const DirectoryCard = ({ data }) => {
  const [showEmail, setShowEmail] = useState(false);

  if (!data) return null;

  return (
    <div 
      className="relative cursor-pointer transform transition hover:scale-105"
      onClick={() => setShowEmail(true)}
    >
      {/* Use the original Card component */}
      <Card data={data} />

      {/* Email Popup Overlay */}
      {showEmail && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={(e) => {
              e.stopPropagation();
              setShowEmail(false);
            }}
          />
          
          {/* Popup */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-lg shadow-xl p-4 z-50 min-w-[200px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <p className="text-blue-600">{data.email || 'Email not available'}</p>
            <button
              className="mt-3 text-sm text-gray-600 hover:text-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmail(false);
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DirectoryCard;