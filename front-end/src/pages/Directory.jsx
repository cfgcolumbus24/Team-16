import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to make HTTP requests
import DirectoryCard from '../components/DirectoryCard'; // Import the Card component

const AlumniDirectory = () => {
  const [directory, setDirectory] = useState([]);
  const [filteredDirectory, setFilteredDirectory] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [artCategoryFilter, setArtCategoryFilter] = useState('');

  // Fetch the alumni data from the backend
  useEffect(() => {
    const fetchDirectory = async () => {
      try {
        const response = await axios.get('http://localhost:5050/db/alumni');
        setDirectory(response.data);
        setFilteredDirectory(response.data);
      } catch (error) {
        console.error('Error fetching alumni:', error);
      }
    };

    fetchDirectory();
  }, []);

  // Update filtered directory whenever a filter changes
  useEffect(() => {
    if (directory.length > 0) {
      filterDirectory();
    }
  }, [directory, locationFilter, categoryFilter, artCategoryFilter]);

  const filterDirectory = () => {
    let filtered = directory;

    if (!locationFilter && !categoryFilter && !artCategoryFilter) {
      setFilteredDirectory(directory);
      return;
    }

    if (locationFilter) {
      filtered = filtered.filter(alumni =>
        alumni.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(alumni =>
        alumni.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (artCategoryFilter) {
      filtered = filtered.filter(alumni =>
        alumni.artCategory.toLowerCase().includes(artCategoryFilter.toLowerCase())
      );
    }

    setFilteredDirectory(filtered);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleArtCategoryFilterChange = (e) => {
    setArtCategoryFilter(e.target.value);
  };

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">Browse Alumni Network</h1>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Location:</label>
          <input
            type="text"
            value={locationFilter}
            onChange={handleLocationFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Role:</label>
          <input
            type="text"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role (Artist, Educator, etc.)"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Specialty:</label>
          <input
            type="text"
            value={artCategoryFilter}
            onChange={handleArtCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter art specialty"
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDirectory.map(alumni => (
          <DirectoryCard key={alumni._id} data={alumni} />
        ))}
      </ul>
    </div>
  );
};

export default AlumniDirectory;