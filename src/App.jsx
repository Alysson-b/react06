import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Layout } from "./components/Layout";
import { Page404 } from "./pages/page404";
import { Resultado } from "./pages/Resultado";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Resultado" element={<Resultado />} />
            <Route path="*" element={<Page404 />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
