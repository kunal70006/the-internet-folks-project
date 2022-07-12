import Image from "next/image";
import {
  NavbarContainer,
  Navlinks,
  NavlinksContainer,
} from "../../styles/Components";
import logo from "/public/assets/logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image src={logo} alt="brand-logo" />
      <NavlinksContainer>
        <Navlinks>Features</Navlinks>
        <Navlinks>Pricing</Navlinks>
        <Navlinks>Resources</Navlinks>
      </NavlinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
