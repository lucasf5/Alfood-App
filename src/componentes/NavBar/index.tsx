import estilos from "./NavBar.module.scss";
import { Link, Outlet } from "react-router-dom";
import Banner from "../Banner";

const NavBar = () => {
  return (
    <div>
      <nav className={estilos.Link}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurantes">Restaurantes</Link>
          </li>
          <li>
            <Link to="/admin/pratos">Pratos</Link>
          </li>
          <li>
            <Link to="/admin/restaurantes">Admin</Link>
          </li>
        </ul>
      </nav>
      <Banner />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
