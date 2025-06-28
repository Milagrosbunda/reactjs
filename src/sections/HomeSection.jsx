import Banner from "../components/banners/BannerComponent";
import PanelComponent from "../components/products/PanelComponent";
import SEOComponent from "../components/general/SEOComponent";
import { useState } from "react";
import SearchSection from "./SearchSection";
import SearchComponent from "../components/general/SearchComponent";

function HomeSection() {
  const [showSearchComponent, setShowSearchComponent] = useState(false);
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(value);
    setShowSearchComponent(value != "");
  };

  return (
    <>
      <SEOComponent title="Home" />

      <div className="container pt-5">
        {showSearchComponent ? (
          <SearchSection
            input={input}
            handleChange={setShowSearchComponent}
            setInput={setInput}
          />
        ) : (
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <SearchComponent
                handleChange={handleInput}
                showButton={false}
                searchTerm={input}
              />
              <Banner
                title={"🚀 Oferta especial"}
                info="Aprovechá el 3x2"
                desc="¡Combiná artículos de la misma marca como quieras!"
              />
              <div className="mt-5">
                <Banner
                  title={"⏰ Próximamente ⏰"}
                  info="Estamos preparando nuevos productos para vos"
                  desc="Suscribite con tu email para recibir las últimas noticias de nuestro catálogo."
                />
              </div>
            </div>

            <div className="col-12 col-md-8">
              <PanelComponent />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomeSection;
