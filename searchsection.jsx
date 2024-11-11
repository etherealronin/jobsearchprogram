import React from 'react';
import { Search } from 'lucide-react';
import { useJobContext } from './JobContext';

const SearchSection = () => {
    const { filters, setFilters } = useJobContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional search logic if needed
    };

    return (
        <div className="bg-white rounded-lg shadow-md mt-12 p-6">
            <h2 className="text-xl font-bold mb-4">Look for Jobs Here</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Job Title"
                    className="p-2 border rounded"
                    value={filters.title}
                    onChange={(e) => setFilters({...filters, title: e.target.value})}
                />
                {/* ... other form fields */}
            </form>
        </div>
    );
};

export default SearchSection;