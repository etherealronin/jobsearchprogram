import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([
        {
            title: "Software Engineer",
            company: "Tech Innovators",
            location: "San Francisco, CA",
            jobType: "Full time",
            description: "DESC"
        },
        // ... other initial jobs
    ]);

    const [filters, setFilters] = useState({
        title: '',
        location: '',
        jobType: 'Any',
    });

    const filterJobs = () => {
        return jobs.filter(job => {
            return (
                job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
                job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
                (filters.jobType === 'Any' || job.jobType === filters.jobType)
            );
        });
    };

    return (
        <JobContext.Provider value={{ jobs, setJobs, filters, setFilters, filterJobs }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobContext = () => useContext(JobContext);