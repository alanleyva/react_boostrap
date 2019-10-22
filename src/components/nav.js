import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { lang } from "../middleware/lang";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top main_navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://via.placeholder.com/200x150?text=logo"
              alt=" Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {lang("Gallería", "Gallery")}
                </a>
                <div className="dropdown-menu">
                  <Link
                    to={`/gallery/paintings/35/1`}
                    className="dropdown-item"
                  >
                    {lang("Pinturas", "Paintings")}
                  </Link>
                  <Link
                    to={`/gallery/illustrations/70/1`}
                    className="dropdown-item"
                  >
                    {lang("Ilustraciones", "Ilustrations")}
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {lang("Artista", "Artist")}
                </a>
                <div className="dropdown-menu">
                  <Link
                    to={`/artist/carloscontreras/69/1`}
                    className="dropdown-item"
                  >
                    Carlos Contreras
                  </Link>
                  <Link to={`/artist/marv-hill/58/1`} className="dropdown-item">
                    Marv Hill
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={this.props.auth ? "/logout" : "/login"}
                >
                  {this.props.auth ? lang("Salir", "Logout") : "Login"}
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link className="nav-link" to="/cart">
                  <span className="small">
                    <span id="cartItems_id">
                      {this.props.cart ? this.props.cart.items : ""}
                    </span>{" "}
                    {lang("articulos", "items")}
                  </span>{" "}
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth, cart }) {
  return { auth, cart };
}

export default connect(mapStateToProps)(Nav);
