/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">My Portifolio</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Portifolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
