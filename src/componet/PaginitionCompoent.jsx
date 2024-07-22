import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginitionCompoent = ({getPage,pageCount}) => {
    const handlePageClick = (event) => {
        // Handle page click
        console.log(`Clicked page: ${event.selected}`);
        getPage(event.selected + 1);
    };


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center items-center mt-2 space-x-1"
            pageClassName="px-1"
            pageLinkClassName="block px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-200"
            previousClassName="px-1"
            previousLinkClassName="block px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-200"
            nextClassName="px-1"
            nextLinkClassName="block px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-200"
            activeClassName="bg-blue-500 text-white"
            disabledClassName="opacity-50 cursor-not-allowed"
            breakClassName="px-1"
            breakLinkClassName="block px-2 py-1 border border-gray-300 rounded text-sm"
        />
    );
}

export default PaginitionCompoent;
