import { Link } from "react-router-dom";

import "../../global.scss";
import "./style.scss";

export const Menu: React.FC = () => {
  return (
    <header className="menu">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
