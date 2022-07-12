import styled from "styled-components";
import theme from "./Theme";
import Image from "next/image";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 2em 12em;
`;

export const NavlinksContainer = styled.div`
  display: flex;
  margin-left: 4em;
  width: 400px;
  justify-content: space-between;
`;

export const Navlinks = styled.p`
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.neutral.gray};
  transition: 0.2s ease-in;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: ${theme.colors.neutral.black};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const HeaderText = styled.h1`
  font-size: ${theme.fontSize.xl};
  color: ${theme.colors.neutral.black};
  text-align: center;
`;

export const LinkShortnerContainer = styled.div`
  display: flex;
  background-image: url(${(props: any) => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2em 8em;
  padding: 4em;
  align-items: center;
  justify-content: center;
`;

export const CustomInput = styled.input`
  border-radius: 8px;
  background-color: white;
  padding: 1em 1.5em;
  border: none;
  width: 70%;
  font-weight: 600;
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.neutral.black};
  ::placeholder {
    color: ${theme.colors.neutral.pink};
  }
  :focus {
    outline: none;
  }
`;

export const CustomBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${theme.colors.primary.cyan};
  padding: 1em 3em;
  font-size: ${theme.fontSize.md};
  color: white;
  font-weight: 600;
  transition: 0.2s ease-in;
  :hover {
    background-color: ${theme.colors.secondary.lightCyan};
  }
`;

export const GrayBgContainer = styled.div`
  background-color: ${theme.colors.neutral.grayBg};
  padding-bottom: 10em;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const BodyText = styled.p`
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.textColor};
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.5em;
`;

export const BrandCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 4em;
  padding-right: 4em;
  align-items: center;
`;

export const BrandCardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 400px;
  min-height: 300px;
  text-align: left;
  padding-left: 3em;
  padding-right: 3em;
  margin-top: 8em;
`;

export const BrandCardImageContainer = styled.div`
  border-radius: 100%;
  background-color: ${theme.colors.primary.darkViolet};
  width: fit-content;
  padding: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3em;
`;

export const BlueConnectingLines = styled.div`
  height: 10px;
  display: flex;
  width: 16%;
  margin-top: 6em;
  background-color: ${theme.colors.primary.cyan};
`;

export const FooterContainer = styled.footer`
  display: flex;
  background-color: ${theme.colors.neutral.veryDarkViolet};
  min-height: 25vh;
  padding: 4em 12em;
  align-items: flex-start;
`;

export const FooterSocialsContainer = styled.div`
  display: flex;
  margin-top: 2em;
  width: 200px;
  justify-content: space-between;
  margin-right: 14em;
`;

export const CustomImage = styled(Image)`
  cursor: pointer;
  :hover {
    filter: invert(0.4) sepia(1) saturate(20) hue-rotate(147.6deg) brightness(1);
  }
`;

export const FooterDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rebeccapurple; */
  width: 100%;
  height: 100%;
`;

export const FooterText = styled(BodyText)`
  text-align: left;
  font-weight: normal;
  margin-bottom: 0.5em;
  width: fit-content;
  cursor: pointer;
  transition: 0.2s ease-in;
  :hover {
    color: ${theme.colors.primary.cyan};
  }
`;
