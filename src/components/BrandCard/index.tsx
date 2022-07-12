import Image from "next/image";
import {
  BodyText,
  BrandCardContainer,
  BrandCardImageContainer,
  HeaderText,
} from "../../styles/Components";

interface BrandCardProps {
  heading: string;
  bodyText: string;
  imageSrc: string;
}

const BrandCard = ({ heading, bodyText, imageSrc }: BrandCardProps) => {
  return (
    <BrandCardContainer>
      <BrandCardImageContainer>
        <Image src={imageSrc} alt="brand-card-image" />
      </BrandCardImageContainer>
      <HeaderText
        style={{
          fontSize: 24,
          textAlign: "left",
          marginBottom: "1em",
          marginTop: "2em",
        }}
      >
        {heading}
      </HeaderText>
      <BodyText style={{ letterSpacing: "normal", fontWeight: "normal" }}>
        {bodyText}
      </BodyText>
    </BrandCardContainer>
  );
};

export default BrandCard;
