import SuggestionComponent from "../components/products/SuggestionComponent";

function PromoSection() {
  return (
    <>
      <div className="pb-5">
        <h1 className="pt-5">Ups...</h1>
        <h4>
          <i className="fa-solid fa-screwdriver-wrench"></i> Estamos trabajando
          para solucionar este problema.
          <i className="fa-solid fa-screwdriver-wrench"></i>
        </h4>
      </div>

      <hr className="rounded" />
      <SuggestionComponent />
    </>
  );
}

export default PromoSection;
