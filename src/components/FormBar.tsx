import React, { FormEvent, useRef } from "react";
import Icons from 'react-fa';

import 'styles/FormBar.css';

interface FormBarProps {
    sortBy: string,
    searchText: string,
    submitAction: (searchText: string, sortBy: string) => void
}

const FormBar: React.FC<FormBarProps> = ({sortBy="", searchText="", submitAction}) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const sortSelectRef = useRef<HTMLSelectElement>(null);

    const submitFilters = (event: FormEvent): void => {
        event.preventDefault();

        const searchInput = searchInputRef.current?.value || '';
        const sortInput = sortSelectRef.current?.value || '';

        submitAction(searchInput, sortInput);
    }

    return (
        <div className="formbar">
            <div className="input-container">
                <div>
                    <form onSubmit={submitFilters}>
                        <input 
                            type="text"
                            id="search-text"
                            data-testid="search-text"
                            placeholder='Search...'
                            ref={searchInputRef}
                            defaultValue={searchText}
                        />
                        <button 
                            id="search-button" 
                            data-testid="search-button"
                        >
                            <Icons name="search" size="lg" />
                        </button>
                    </form>
                </div>
                <div>
                    <label htmlFor="sort-select">Sort by </label>
                    <select
                        id="sort-select"
                        data-testid="sort-select"
                        onChange={submitFilters}
                        ref={sortSelectRef}
                        value={sortBy}
                    >
                        <option value="">select option</option>
                        <option value="name,asc">Name - Ascending</option>
                        <option value="name,desc">Name - Descending</option>
                        <option value="dateLastEdited,asc">Last updated - Ascending</option>
                        <option value="dateLastEdited,desc">Last updated - Descending</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FormBar;
