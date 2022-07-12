import Image from "next/image";
import { HeaderContainer, HeaderText } from "../../styles/Components";
import peopleWorking from "/public/assets/peopleWorking.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        MORE THAN JUST <br />
        SHORTER LINKS
      </HeaderText>
      <Image src={peopleWorking} alt="header banner" />
    </HeaderContainer>
  );
};

export default Header;
