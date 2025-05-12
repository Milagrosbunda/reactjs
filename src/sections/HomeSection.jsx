import { useContext } from "react";
import Banner from "../components/banners/BannerComponent";
import PanelComponent from "../components/products/PanelComponent";
import { UserContext } from "../contexts/UserContext";

function HomeSection() {
  return (
    <>
      <div class="container pt-5">
        <div class="row">
          <div class="col-4" >
            <Banner
              title={"🚀 Oferta especial"}
              info="Aprovecha el 3x2"
              desc="y combina los articulos de la misma marca como quieras!"
            />
            <div className="mt-5">
            <Banner
              title={"⏰ Proximamente ⏰"}
              info="Estamos preparando nuevos productos para vos"
              desc="Acordate de suscribirte con tu email para recibir las ultimas noticias de nuestro catalogo."
            /></div>
          </div>
          <div class="col-8">
            <PanelComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
