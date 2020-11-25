import ReactPaginate from 'react-paginate';
import './Pagination.scss';

function CustomPagination({selectedPage, totalPages, handlePageClick}) {
    return (
        <ReactPaginate
          initialPage={selectedPage-1}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
    );
}

export default CustomPagination;