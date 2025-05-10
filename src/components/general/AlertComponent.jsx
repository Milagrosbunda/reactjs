import { useContext } from "react";
import { SectionContext } from "../../contexts/SectionContext";
import { Link } from "react-router-dom";

function AlertComponent() {
  const { showGlobalAlert } = useContext(SectionContext);
  const { loadCartPage } = useContext(SectionContext);

  return (
    <>
      {showGlobalAlert && (
        <div
          className={"mt-5 text-center alert alert-" + showGlobalAlert?.type}
        >
          {showGlobalAlert.message}
          {showGlobalAlert.link && (
            <>
              <Link
                to={showGlobalAlert.link?.href}
                className="alert-link"
                key={showGlobalAlert.link?.href}
                onClick={() => loadCartPage()}
              >
                {showGlobalAlert.link?.text}
              </Link>
              !
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AlertComponent;
