import React from "react";
import "./Events.css";

const events = [
  { date: '2023-11-01', title: 'Art Exhibition Opening', description: 'An opening reception for the new modern art exhibit.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-05', title: 'Sculpture Workshop', description: 'Hands-on workshop on sculpting techniques.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-10', title: 'Painting with Acrylics', description: 'Learn the basics of painting with acrylics.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-15', title: 'Digital Art Showcase', description: 'A showcase of local digital artists.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-20', title: 'Art History Lecture', description: 'Lecture on the influence of Renaissance art on modern culture.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-25', title: 'Figure Drawing Class', description: 'A class focused on human figure drawing techniques.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-30', title: 'Gallery Night', description: 'A night to explore local galleries and meet artists.', imageUrl: 'https://via.placeholder.com/150' },
];

const EventsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Events This Month</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
