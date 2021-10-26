import React, { useRef } from "react";
import 'styles/formBar.css';

const FormBar: React.FC<any> = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    return (
        <form className="formbar">
            <div className="input-container">
                <input type="text" id="search-text" data-testid="search-text" placeholder='Search...' ref={inputRef} />
                <select id="sort-select" data-testid="sort-select" ref={selectRef}>
                    <option value="">-- Select --</option>
                </select>
            </div>
        </form>
    );
}

export default FormBar;
