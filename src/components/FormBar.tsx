import React, { FormEvent, useRef } from "react";
import Icons from 'react-fa';

import 'styles/FormBar.css';

const FormBar: React.FC<any> = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const submitFilters = (event: FormEvent): void => {
        event.preventDefault();
        console.log(inputRef.current?.value);
        console.log(selectRef.current?.value);
    }

    return (
        <div className="formbar">
            <div className="input-container">
                <div>
                    <form onSubmit={submitFilters}>
                        <input type="text" id="search-text" data-testid="search-text" placeholder='Search...' ref={inputRef} />
                        <button id="search-button" data-testid="search-button"><Icons name="search" size="lg" /></button>
                    </form>
                </div>
                <div>
                    <label htmlFor="sort-select">Sort by </label>
                    <select id="sort-select" data-testid="sort-select" onChange={submitFilters} ref={selectRef}>
                        <option>sort1</option>
                        <option>sort2</option>
                        <option>sort3</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FormBar;
