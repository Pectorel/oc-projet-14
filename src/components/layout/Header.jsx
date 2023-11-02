import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h1>
          <NavLink to={"/"}>HRnet</NavLink>
        </h1>
        <div>
          <NavLink to={"/employees"}>Employees</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
