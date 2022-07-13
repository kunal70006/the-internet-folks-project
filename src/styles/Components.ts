import styled from "styled-components";
import theme from "./Theme";
import Image from "next/image";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 2em 12em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavbarWrapper = styled.nav`
  display: flex;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4em;
`;

export const NavlinksContainer = styled.div`
  display: flex;
  margin-left: 4em;
  width: 300px;
  justify-content: space-between;
`;

export const MobileNavlinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  height: 100vh;
  width: 80%;
  z-index: 999;
  text-align: left;
  padding: 0 2em;
  top: 0;
  left: 0;
  transition: transform 0.4s ease-in-out;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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
  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  @media screen and (max-width: 768px) {
    padding: 0 1em 0 1em;
  }
`;

export const HeaderText = styled.h1`
  font-size: ${theme.fontSize.xl};
  color: ${theme.colors.neutral.black};
  text-align: center;
  @media screen and (max-width: 1280px) {
    font-size: 96px;
  }
  @media screen and (max-width: 768px) {
    font-size: 54px;
    margin-bottom: 2em;
  }
`;

export const LinkShortnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${(props: any) => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto 8em;
  /* margin-bottom: 0; */
  padding: 4em;
  align-items: flex-start;
  justify-content: center;
  height: 200px;
  @media screen and (max-width: 1024px) {
    margin: auto 2em;
  }
  @media screen and (max-width: 1440px) {
    margin: auto 4em;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: auto 1em;
    padding: 2em 1em;
    height: auto;
    overflow-x: hidden;
  }
`;

export const CustomInputContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CustomInput = styled.input`
  border-radius: 8px;
  background-color: white;
  padding: 1em 1.5em;
  border: none;
  width: 95%;
  font-weight: 600;
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.neutral.black};
  ::placeholder {
    color: ${theme.colors.neutral.pink};
  }
  :focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 4px solid ${theme.colors.secondary.red};
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

  @media screen and (max-width: 1024px) {
    padding: 1em 2em;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1.5em;
  }
`;

export const GrayBgContainer = styled.div`
  background-color: ${theme.colors.neutral.grayBg};
  padding-bottom: 10em;
  padding-top: 4em;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 4em;
  @media screen and (max-width: 768px) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 4em;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 0 1em;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1em;
  }
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
  @media screen and (max-width: 1280px) {
    padding-right: 2em;
    padding-left: 2em;
    padding-bottom: 2em;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    align-items: center;
    margin-top: 0;
    :first-child {
      margin-top: 8em;
    }
  }
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
  @media screen and (max-width: 768px) {
  }
`;

export const BlueConnectingLines = styled.div`
  height: 10px;
  display: flex;
  width: 16%;
  margin-top: 6em;
  background-color: ${theme.colors.primary.cyan};
  @media screen and (max-width: 768px) {
    width: 10px;
    height: 150px;
    margin: 0;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  background-color: ${theme.colors.neutral.veryDarkViolet};
  min-height: 25vh;
  padding: 4em 12em;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    padding: 4em;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 4em 0;
  }
`;

export const FooterHeaderText = styled(HeaderText)`
  color: white;
  font-size: 18px;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 2em;
  }
`;

export const FooterSocialsContainer = styled.div`
  display: flex;
  margin-top: 2em;
  width: 200px;
  justify-content: space-between;
  margin-right: 15em;

  @media screen and (max-width: 1280px) {
    margin-right: 6em;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  /* margin-right: 6em; */
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
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  margin: auto 10em;
  padding: 1em 4em;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 2em;
  border-radius: 8px;
  align-items: center;
  @media screen and (max-width: 1280px) {
    margin: auto 6em;
  }
  @media screen and (max-width: 1024px) {
    padding: 1em 2em;
    margin: auto 4.5em;
  }
  @media screen and (max-width: 768px) {
    padding: 1em;
    margin: 0 1em;
    margin-bottom: 2em;
    flex-direction: column;
  }
`;

export const LinkText = styled(BodyText)`
  color: ${theme.colors.primary.cyan};
  margin-right: 2em;
  @media screen and (max-width: 1024px) {
    margin-right: 1em;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    text-align: left;
    width: 100%;
  }
`;

export const StatisticsHeaderText = styled(HeaderText)`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 1em;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const LinkHeaderText = styled(HeaderText)`
  text-align: left;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid ${theme.colors.neutral.gray};
    padding-bottom: 1em;
  }
`;

export const LinkBtn = styled(CustomBtn)`
  background-color: ${theme.colors.primary.darkViolet};
  :hover {
    background-color: ${theme.colors.primary.darkViolet};
  }
`;

export const ShortUrlContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.secondary.red};
  font-size: 16px;
  margin-top: 1em;
  margin-left: 1em;
  @media screen and (max-width: 768px) {
    margin-top: 0.4em;
    margin-left: 0;
  }
`;

export const GetStartedBtn = styled(CustomBtn)`
  border-radius: 32px;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const MobileFooterSocialsContainer = styled(FooterSocialsContainer)`
  margin: 0;
  width: 200px;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
