import React from 'react';

const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        <p className="font-bold text-gray-700">Company: {job.company}</p>
        <p className="text-gray-600">Location: {job.location}</p>
        <p className="text-gray-600">Job Type: {job.jobType}</p>
        <p className="mt-2 text-gray-700">{job.description}</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Enroll!
        </button>
    </div>
);

export default JobCard;