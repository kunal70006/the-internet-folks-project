import { ChangeEvent } from "react";
import {
  CustomBtn,
  CustomInput,
  LinkShortnerContainer,
} from "../../styles/Components";
import meteor from "/public/assets/Meteor.png";

interface LinkShortnerProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userInput: any;
  shortenURL: () => void;
}

const LinkShortner = ({
  handleChange,
  userInput,
  shortenURL,
}: LinkShortnerProps) => {
  return (
    // @ts-ignore
    <LinkShortnerContainer image={meteor}>
      <CustomInput
        placeholder="Shorten a link here..."
        style={{ marginRight: "4em" }}
        onChange={handleChange}
        value={userInput || ""}
      />
      <CustomBtn onClick={shortenURL}>Shorten it!</CustomBtn>
    </LinkShortnerContainer>
  );
};

export default LinkShortner;
