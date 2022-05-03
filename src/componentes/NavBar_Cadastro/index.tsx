import estilos from "./NavBar.module.scss";
import { Link, Outlet } from "react-router-dom";

const NavBarCadastro = () => {
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
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBarCadastro;
