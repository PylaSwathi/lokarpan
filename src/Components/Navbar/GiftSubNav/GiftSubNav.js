import "./GiftSubNav.css";

const GiftSubNav = () => {
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Make a Gift</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item dropdown">
            <a href="/about">
              Browse all <FaAngleDown />
            </a>
            <div className="dropdown-content">
              <div className="dropdown-container">
                <h4>Explore About</h4>
                <ul>
                  <li>
                    <a href="/our-role">Our Role</a>
                  </li>
                  <li>
                    <a href="/history">History</a>
                  </li>
                  <li>
                    <a href="/our-role">Mission</a>
                  </li>
                  <li>
                    <a href="/leadership">Leadership</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/financials">Financial</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <a href="/our-role">Alumini</a>
                  </li>
                  <li>
                    <a href="/our-role">Contact</a>
                  </li>
                  <li>
                    <a href="/our-role">Blog</a>
                  </li>
                  <li>
                    <a href="/leadership">Subscribe</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <button type="button" className="apply-btn">
              <a href="/donate">Donate</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GiftSubNav;
