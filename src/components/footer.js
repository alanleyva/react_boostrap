import React, { Component } from "react";
import { setLang, lang } from "../middleware/lang";
import { Link } from "react-router-dom";
const footer_items = {
  "Acerca de nosotros": {
    text: ["Nuestra Historia", "Carreras", "Opiniones", "Press", "Visítanos"]
  },
  "Atención al Cliente": {
    text: [
      "Tips",
      "Envíos",
      "Preguntas Frecuentes",
      "Reembolsos",
      "Ayuda",
      "Contacto"
    ]
  },
  "Lo Demás": {
    text: [
      "Términos y Condiciones",
      "Política de Privacidad",
      "Socios",
      "Ordenes Mayores",
      "Programas de Afiliados",
      "Descuento Estudiante"
    ]
  }
};
class Footer extends Component {
  chLang() {
    setLang();
  }
  render() {
    return (
      <footer className="footer">
        <div className="container footer-info">
          <div className="row items-cont">
            <FooterItems />
            <div className="col-md-3 small text-uppercase mb-4 mb-md-0">
              <h3>Be the First To Know</h3>
              <p className="opacity_5 small text-lowercase">
                {" "}
                Signup to our newesletter for the latest collaborations, new
                products and exclusive discounts!{" "}
              </p>
              <div className="input-group my-3">
                <input
                  type="email"
                  className="form-control"
                  name="EMAIL"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="subscribe_btn"
                ></input>
                <div className="input-group-append">
                  <button
                    className="btn btn-light text-uppercase d-md-none d-lg-block"
                    type="button"
                    id="subscribe_btn"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <button
                className="btn btn-link text-white d-block mx-auto mt-5 mx-md-0"
                type="button"
                onClick={this.chLang}
              >
                {lang("English", "Español")}
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function FooterItems(type) {
  return (
    <React.Fragment>
      {Object.keys(footer_items).map(function(key, index) {
        return (
          <div
            className="col-md-3 col-lg-2 small text-uppercase mb-4 mb-md-0"
            key={`ul_${key}`}
          >
            <h3>{key}</h3>
            <ul>
              <FooterItem items={footer_items[key]} />
            </ul>
          </div>
        );
      })}
    </React.Fragment>
  );
}

function FooterItem(props) {
  let { items } = props;
  return (
    <React.Fragment>
      {Object.keys(items).map(function(key, index) {
        let item = items[key];
        let x = 0;

        let emelent = item.map(ft_item => {
          x++;
          return (
            <li className="my-2" key={`li_text${x}`}>
              <Link className="" to="/our-story/3617">
                {ft_item}
              </Link>
            </li>
          );
        });
        return emelent;
      })}
    </React.Fragment>
  );
}

export default Footer;
