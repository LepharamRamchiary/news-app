import { categories } from "../constants";
import Navlink from "./Navlink";

function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <Navlink key={category} category={category} isActive={true} />
      ))}
    </nav>
  )
};

export default NavLinks;
