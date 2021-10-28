import React from "react";
import { PaginationProps } from "constants/types";
 
const Pagination: React.FC<PaginationProps> = ({page, pageSize, handlePagination}) => {

    return (
        <div className="pagination-wrapper" data-testid="pagination-wrapper">
            <button 
                className="previous-button" 
                data-testid="previous-button"
                onClick={()=>handlePagination(page - 1)}
                disabled={page === 1}
                > &lt; </button>
            <button 
                className={"page-button"}
                data-testid="page-button"
                onClick={()=>handlePagination(1)}
                disabled={page === 1}
                > 1 </button>
            {page > 3 && <span className="page-separator">...</span>}
            {page === pageSize && pageSize > 3 && (
                <button 
                    className="page-button" 
                    data-testid="page-button"
                    onClick={()=>handlePagination(page - 2)}
                    > {page - 2} </button>
            )}
            {page > 2 && (
                <button 
                    className="page-button" 
                    data-testid="page-button"
                    onClick={()=>handlePagination(page - 1)}
                    > {page - 1} </button>
            )}
            {page !== 1 && page !== pageSize && (
                <button 
                    className="page-button active" 
                    data-testid="page-button"
                    disabled={true}
                    > {page} </button>
            )}
            {page < pageSize-1 && (
                <button 
                    className="page-button" 
                    data-testid="page-button"
                    onClick={()=>handlePagination(page + 1)}
                    > {page + 1} </button>
            )}
            {page === 1 && pageSize > 3 && (
                <button 
                    className="page-button" 
                    data-testid="page-button"
                    onClick={()=>handlePagination(page + 2)}
                    > {page + 2} </button>
            )}
            {page < pageSize - 2 && <span className="page-separator">...</span>}
            {page !== 1 && (<button 
                className="page-button" 
                data-testid="page-button"
                onClick={()=>handlePagination(pageSize)}
                disabled={page === pageSize}
                > {pageSize} </button>
            )}
            <button 
                className="next-button" 
                data-testid="next-button"
                onClick={()=>handlePagination(page + 1)}
                disabled={page === pageSize}
                > &gt; </button>
        </div>
    );
}
 
export default Pagination;
