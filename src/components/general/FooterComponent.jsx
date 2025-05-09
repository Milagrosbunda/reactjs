import React from "react";

function FooterComponent() {
  return (
    <footer className="text-center" >
      <div className="container pt-1" >
        <section className="">
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-1"
      >
        © 2025 Copyright
      </div>
    </footer>
  );
}

export default FooterComponent;
