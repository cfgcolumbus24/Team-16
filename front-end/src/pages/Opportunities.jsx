import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [artCategoryFilter, setArtCategoryFilter] = useState("");
  const [newOpportunity, setNewOpportunity] = useState({
    opportunityName: "",
    description: "",
    location: "",
    category: "",
    artCategory: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  useEffect(() => {
    if (opportunities.length > 0) {
      filterOpportunities();
    }
  }, [opportunities, locationFilter, categoryFilter, artCategoryFilter]);

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get("http://localhost:5050/db/opportunity/");
      setOpportunities(response.data);
      setFilteredOpportunities(response.data);
    } catch (error) {
      console.error("Error fetching opportunities:", error);
    }
  };

  const filterOpportunities = () => {
    let filtered = opportunities;

    if (!locationFilter && !categoryFilter && !artCategoryFilter) {
      setFilteredOpportunities(opportunities);
      return;
    }

    if (locationFilter) {
      filtered = filtered.filter((opportunity) =>
        opportunity.location
          .toLowerCase()
          .includes(locationFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((opportunity) =>
        opportunity.category
          .toLowerCase()
          .includes(categoryFilter.toLowerCase())
      );
    }

    if (artCategoryFilter) {
      filtered = filtered.filter((opportunity) =>
        opportunity.artCategory
          .toLowerCase()
          .includes(artCategoryFilter.toLowerCase())
      );
    }

    setFilteredOpportunities(filtered);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting new opportunity:", newOpportunity);
    try {
      await axios.post("http://localhost:5050/db/opportunity/", newOpportunity);
      console.log("New opportunity posted successfully");
      setNewOpportunity({
        opportunityName: "",
        description: "",
        location: "",
        category: "",
        artCategory: "",
      });
      setIsFormVisible(false);
      fetchOpportunities();
    } catch (error) {
      console.error("Error posting opportunity:", error.response.data);
    }
  };

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">
        Browse and Share Opportunities
      </h1>
      <div className="mb-8 text-center">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          {isFormVisible ? "Cancel" : "Share an Opportunity"}
        </button>
      </div>
      {isFormVisible && (
        <form
          onSubmit={handleFormSubmit}
          className="mb-8 bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Opportunity Name:
              </label>
              <input
                type="text"
                name="opportunityName"
                value={newOpportunity.opportunityName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Location:
              </label>
              <input
                type="text"
                name="location"
                value={newOpportunity.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Description:
            </label>
            <textarea
              name="description"
              value={newOpportunity.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Category:
              </label>
              <input
                type="text"
                name="category"
                value={newOpportunity.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Art Category:
              </label>
              <input
                type="text"
                name="artCategory"
                value={newOpportunity.artCategory}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">
            Filter by Location:
          </label>
          <input
            type="text"
            value={locationFilter}
            onChange={handleLocationFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City, State"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">
            Filter by Opportunity Type:
          </label>
          <input
            type="text"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Commission, Residency, etc"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">
            Filter by Art Category:
          </label>
          <input
            type="text"
            value={artCategoryFilter}
            onChange={handleArtCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Painting, Sculpture, etc"
          />
        </div>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <Card key={opportunity._id} data={opportunity} />
        ))}
      </ul>
    </div>
  );
};

export default Opportunities;