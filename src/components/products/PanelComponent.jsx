import ProductsComponent from "./ProductsComponent";
import WelcomeComponente from "../banners/WelcomeComponent";
import { useNavigate } from "react-router-dom";
import { PRODUCT_REQUEST } from "../../constants/constants";
import SuggestionComponent from "./SuggestionComponent";

const PanelComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <WelcomeComponente />
        </div>
        <div className="w-100"></div>
        <SuggestionComponent/>
      </div>
    </>
  );
};

export default PanelComponent;
