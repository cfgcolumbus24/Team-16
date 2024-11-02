// import React from 'react';

// const Card = ({ data }) => {
//   return (
//     <li className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
//       <div className="p-4">
//         <h2 className="text-2xl font-semibold mb-2 text-gray-800">{data.directoryname}</h2>
//         {data.name && <p className="text-gray-2000 mb-2">{data.name}</p>}
//         {data.artCategory && <p className="text-gray-500 mb-2">{data.artCategory}</p>}
//         {data.description && <p className="text-gray-600 mb-2">{data.description}</p>}
//         {data.category && <p className="text-gray-500 mb-2">{data.category}</p>}
//         {data.title && <p className="text-gray-500 mb-2">{data.title}</p>}
//         {data.department && <p className="text-gray-600 mb-2">{data.department}</p>}
//         {data.email && <p className="text-gray-500 mb-2">{data.email}</p>}
//         <p className="text-gray-400">{data.location}</p>
//       </div>
//     </li>
//   );
// };

// export default Card;
import React from 'react';

const Card = ({ data }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{data.name || data.opportunityName}</h2>
        {data.artCategory && <p className="text-gray-500 mb-2">{data.artCategory}</p>}
        {data.description && <p className="text-gray-600 mb-2">{data.description}</p>}
        {data.category && <p className="text-gray-500 mb-2">{data.category}</p>}
        <p className="text-gray-400">{data.location}</p>
      </div>
    </li>
  );
};

export default Card;