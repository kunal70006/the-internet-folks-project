import Image from "next/image";
import {
  BodyText,
  CustomImage,
  FooterContainer,
  FooterDetailsContainer,
  FooterHeaderText,
  FooterSocialsContainer,
  FooterText,
  HeaderText,
  MobileFooterSocialsContainer,
} from "../../styles/Components";
import logoWhite from "/public/assets/logoWhite.svg";
import facebook from "/public/assets/icon-facebook.svg";
import instagram from "/public/assets/icon-instagram.svg";
import pinterest from "/public/assets/icon-pinterest.svg";
import twitter from "/public/assets/icon-twitter.svg";

export const Footer = () => {
  const brandLogos = [facebook, twitter, pinterest, instagram];
  const footerList = [
    {
      title: "Features",
      desc: ["Link Shortening", "Branded Links", "Analytics"],
    },
    { title: "Resources", desc: ["Blog", "Developers", "Support"] },
    { title: "Company", desc: ["About", "Our Team", "Careers", "Contact"] },
  ];

  return (
    <FooterContainer>
      <div>
        <Image src={logoWhite} alt="brand-logo" />
        <FooterSocialsContainer>
          {brandLogos.map((logo, index) => (
            <CustomImage src={logo} alt="social logo" key={index} />
          ))}
        </FooterSocialsContainer>
      </div>
      {footerList.map((item, index) => (
        <FooterDetailsContainer key={index}>
          <FooterHeaderText>
            {item.title}
            {item.desc.map((feature, index) => (
              <FooterText
                key={index}
                style={{
                  marginTop: index === 0 ? "1em" : 0,
                }}
              >
                {feature}
              </FooterText>
            ))}
          </FooterHeaderText>
        </FooterDetailsContainer>
      ))}
      <MobileFooterSocialsContainer>
        {brandLogos.map((logo, index) => (
          <CustomImage src={logo} alt="social logo" key={index} />
        ))}
      </MobileFooterSocialsContainer>
    </FooterContainer>
  );
};
