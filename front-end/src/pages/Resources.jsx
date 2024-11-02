import React, { useState } from 'react';

const resources = [
  {
    title: 'Grant Resources for Individual Artists',
    description: 'Resources to help individual artists find and apply for grants.',
    link: 'https://www.dropbox.com/scl/fi/80b9bwsuxepclcd5ekawm/Fundraising_Grant-Resources-for-Individual-Artists_2020-04.pdf?rlkey=rp59gk5y9h8bhruejykbemhde&e=1&raw=1',
    category: 'Grants'
  },
  {
    title: 'Grantwriting Dos and Don\'ts',
    description: 'Tips and best practices for writing successful grant applications.',
    link: 'https://www.dropbox.com/scl/fi/gywjsr8qkqid1jl29mkz5/Fundraising_Grantwriting-Dos-and-Donts_Upload_2020-04.pdf?rlkey=ktoouht2gqflawahokfymxbqh&e=1&raw=1',
    category: 'Grants'
  },
  {
    title: 'Grantwriting in Six Steps',
    description: 'A step-by-step guide to writing successful grant applications.',
    link: 'https://www.dropbox.com/scl/fi/kpyqzlsl2ff8o1fonelhu/Fundraising_Grantwriting-in-Six-Steps_Upload-2020-04.pdf?dl=0&e=1&rlkey=6bmosz3d9mcvwbayop5dsfnug&e=1&raw=1',
    category: 'Grants'
  },
  {
    title: 'Selecting Work Samples',
    description: 'Guidelines for selecting the best work samples for your grant applications.',
    link: 'https://www.dropbox.com/scl/fi/c7dyzz4yv2t73zi7umg26/Work-Samples_Selecting-Work-Samples_2020-04.pdf?rlkey=dh53o0nnyvmfqihrma0phs58l&e=1&raw=1',
    category: 'Work Samples'
  },
  {
    title: 'Technical Tips for Preparing Work Samples',
    description: 'Technical tips to ensure your work samples are prepared correctly.',
    link: 'https://www.dropbox.com/scl/fi/z91coulkg2l9n7nvkufg8/Work-Samples_Technical-Tips-for-Preparing-Work-Samples_2020-04.pdf?rlkey=59b77tq80zurcvna2utdm3mhc&e=1&raw=1',
    category: 'Work Samples'
  },
  {
    title: 'Work Samples Dos and Don\'ts',
    description: 'Dos and don\'ts for preparing and submitting work samples.',
    link: 'https://lmcc.net/wp-content/uploads/2014/05/2012-Work-Samples-Selecting_Work_Samples.pdf',
    category: 'Work Samples'
  },
  {
    title: 'Links and Resources',
    description: 'A collection of links and resources for arts education.',
    link: 'https://www.dropbox.com/scl/fi/mec0trsbkx0mi6k794etl/Arts-Education-Links-and-Resources_2020-04.pdf?rlkey=1atr5hqu4md9r955wrnnu1q79&e=1&raw=1',
    category: 'Arts Education'
  },
  {
    title: 'Sample Lesson Plan 1 - Grade 3',
    description: 'Sample art education lesson plan for third grade students.',
    link: 'https://www.dropbox.com/scl/fi/ge2wlspew2bj8vpb5cuvc/Arts-Education-Sample-Lesson-Plan-1-Grade-3_2020-04.pdf?rlkey=mn8cjjej8pcu0r6r3uth6zaoe&e=1&raw=1',
    category: 'Arts Education'
  },
  {
    title: 'Sample Reflection Sheet',
    description: 'Sample art education reflection sheet for students.',
    link: 'https://www.dropbox.com/scl/fi/9laneiz3nnpb8hz5drlod/Arts-Education-Sample-Reflection-Sheet_2020-04.pdf?rlkey=sqotovrn8vi0hwnj6aplvu2g4&e=1&raw=1',
    category: 'Arts Education'
  }
];

const categories = ['Work Samples', 'Grants', 'Arts Education'];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('Work Samples');
  const [selectedResource, setSelectedResource] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedResource(null); // Reset selected resource when category changes
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const filteredResources = selectedCategory
    ? resources.filter(resource => resource.category === selectedCategory)
    : [];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Resources For Artists
      </h1>
      <div className="flex justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-full shadow-lg transition duration-200 ease-in-out ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            {selectedCategory}
          </h2>
          <ul className="space-y-4">
            {filteredResources.map((resource, index) => (
              <li
                key={index}
                className="p-4 bg-white rounded shadow-md hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
                onClick={() => handleResourceClick(resource)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedResource && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            {selectedResource.title}
          </h3>
          <iframe
            src={selectedResource.link}
            width="100%"
            height="800px"
            title={selectedResource.title}
            className="border border-gray-300 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Resources;