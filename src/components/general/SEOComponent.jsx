import { Helmet } from "react-helmet-async";

function SEOComponent({ title, description }) {
  const defaultDesc = description ? description : "Tienda online de productos";
  const defaultName = " | Market";
  return (
    <>
      <Helmet>
        <title>
          {title} {defaultName}
        </title>
        <meta name="description" content={defaultDesc} />
      </Helmet>
    </>
  );
}

export default SEOComponent;
