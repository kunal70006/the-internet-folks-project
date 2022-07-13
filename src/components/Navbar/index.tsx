import Image from "next/image";
import { useState } from "react";
import Hamburger from "hamburger-react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  MobileNavbarWrapper,
  MobileNavlinksContainer,
  NavbarContainer,
  Navlinks,
  NavlinksContainer,
} from "../../styles/Components";
import logo from "/public/assets/logo.svg";
interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Navbar = () => {
  const size: Size = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  return size.width > 768 ? (
    <NavbarContainer>
      <Image src={logo} alt="brand-logo" />
      <NavlinksContainer>
        <Navlinks>Features</Navlinks>
        <Navlinks>Pricing</Navlinks>
        <Navlinks>Resources</Navlinks>
      </NavlinksContainer>
    </NavbarContainer>
  ) : (
    <MobileNavbarWrapper>
      <div>
        <Image src={logo} alt="brand-logo" />
      </div>
      <Hamburger toggle={setIsOpen} toggled={isOpen} />
      {isOpen ? (
        <MobileNavlinksContainer>
          <Navlinks>Features</Navlinks>
          <Navlinks>Pricing</Navlinks>
          <Navlinks>Resources</Navlinks>
        </MobileNavlinksContainer>
      ) : null}
    </MobileNavbarWrapper>
  );
};

export default Navbar;
