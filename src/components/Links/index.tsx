import { useState } from "react";
import {
  CustomBtn,
  HeaderText,
  LinkBtn,
  LinkHeaderText,
  LinksContainer,
  LinkText,
  ShortUrlContainer,
} from "../../styles/Components";

interface LinkProps {
  link: {
    url: string;
    shortUrl: string;
  };
}

const Links = ({ link }: LinkProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link.shortUrl);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
    }
  };
  return (
    <LinksContainer>
      <LinkHeaderText>{link.url}</LinkHeaderText>
      <ShortUrlContainer>
        <LinkText>{link.shortUrl}</LinkText>
        {!isCopied ? (
          <CustomBtn onClick={() => copyToClipboard()}>Copy</CustomBtn>
        ) : (
          <LinkBtn>Copied!</LinkBtn>
        )}
      </ShortUrlContainer>
    </LinksContainer>
  );
};

export default Links;
