import React from "react";

interface PaginationProps {
    
}
 
const Pagination: React.FC<PaginationProps> = () => {
    return (
        <div className="pagination-wrapper" data-testid="pagination-wrapper">
            <button className="previous-button" data-testid="previous-button">&lt;</button>
            <button className="page-button" data-testid="page-button">1</button>
            <button className="next-button" data-testid="next-button">&gt;</button>
        </div>
    );
}
 
export default Pagination;
