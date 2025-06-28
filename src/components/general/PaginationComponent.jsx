import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-primary mx-2"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Anterior página"
        >
          <IoArrowBack />
        </button>
        <span className="align-self-center mx-3">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="btn btn-primary mx-2"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Siguiente página"
        >
          <GrLinkNext />
        </button>
      </div>
    </>
  );
}

export default PaginationComponent;
