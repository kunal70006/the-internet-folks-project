import React from "react";
import {
  BlueConnectingLines,
  BodyText,
  BrandCardsWrapper,
  HeaderText,
  StatisticsContainer,
  StatisticsHeaderText,
} from "../../styles/Components";
import BrandCard from "../BrandCard";
import brandIcon from "/public/assets/brandIcon.svg";

const Statistics = () => {
  const heading = "Brand Recognition";
  const bodyText =
    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.";
  return (
    <StatisticsContainer>
      <StatisticsHeaderText>Advanced Statistics</StatisticsHeaderText>
      <BodyText>
        Track how your links are performing across the web with <br />
        our advanced statistics dashboard.
      </BodyText>
      <BrandCardsWrapper>
        <BrandCard imageSrc={brandIcon} heading={heading} bodyText={bodyText} />
        <BlueConnectingLines />
        <BrandCard imageSrc={brandIcon} heading={heading} bodyText={bodyText} />
        <BlueConnectingLines />
        <BrandCard imageSrc={brandIcon} heading={heading} bodyText={bodyText} />
      </BrandCardsWrapper>
    </StatisticsContainer>
  );
};

export default Statistics;
