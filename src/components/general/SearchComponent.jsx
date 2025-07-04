import { IoArrowBackCircleOutline } from "react-icons/io5";

function SearchComponent({
  handleChange,
  showButton,
  handleReturn,
  searchTerm,
  className
}) {
  return (
    <>
      <div className={"input-group mb-3 " + className }>
        {showButton ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleReturn()}
          >
            <IoArrowBackCircleOutline />
          </button>
        ) : (
          <></>
        )}
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Buscar:
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Buscar"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Empieza a escribir..."
          value={searchTerm}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchComponent;
