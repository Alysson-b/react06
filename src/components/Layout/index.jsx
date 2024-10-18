import { Link, Outlet } from "react-router-dom"

export const Layout = () =>{
  return(
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/Sobre"}>Sobre</Link>
          </li>
          <li>
            <Link to={"/Contato"}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <p>Direitos reservados e os carai</p>
    </footer>
    </>
  )
}