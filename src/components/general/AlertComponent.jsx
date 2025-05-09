import { useContext } from "react";
import { SectionContext } from "../../contexts/SectionContext";

function AlertComponent() {
  const { showGlobalAlert } = useContext(SectionContext);

  return (
    <>
      {showGlobalAlert && (
        <div
          className={"mt-5 text-center alert alert-" + showGlobalAlert?.type}
        >
          {showGlobalAlert.message}
          {showGlobalAlert.link && (
            <>
              <a href={showGlobalAlert.link.href} className="alert-link">
                {showGlobalAlert.link.text}
              </a>
              !
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AlertComponent;
