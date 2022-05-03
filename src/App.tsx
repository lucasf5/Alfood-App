import { Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import NavBarCadastro from "./componentes/NavBar_Cadastro";
import Rodape from "./componentes/Rodape";
import AdministracaoPratos from "./paginas/Administracao/Pratos/AdministracaoPratos";
import Infos from "./paginas/Administracao/Pratos/Infos";
import AdministracaoRestaurantes from "./paginas/Administracao/Restaurante/AdministracaoRestaurantes";
import FormularioRestaurantes from "./paginas/Administracao/Restaurante/FormularioRestaurantes";
import FormularioRestaurantesEditar from "./paginas/Administracao/Restaurante/FormularioRestaurantesEditar";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import FormularioPratos from "./paginas/Administracao/Pratos/FormularioPratos";
import EditarPratos from "./paginas/Administracao/Pratos/EditarPratos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="restaurantes" element={<VitrineRestaurantes />} />
        </Route>

        <Route path="/admin" element={<NavBarCadastro />}>
          <Route path="pratos" element={<AdministracaoPratos />} />
          <Route path="pratos/novo" element={<FormularioPratos />} />
          <Route path="pratos/editar/:id" element={<EditarPratos />} />
          <Route path="pratos/info/:id" element={<Infos />} />


          <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
          <Route
            path="restaurantes/novo"
            element={<FormularioRestaurantes />}
          />
          <Route
            path="restaurantes/editar/:id"
            element={<FormularioRestaurantesEditar />}
          />
        </Route>
      </Routes>
      <Rodape />
    </div>
  );
}

export default App;
