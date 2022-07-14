import { ChangeEvent } from "react";
import {
  CustomBtn,
  CustomInput,
  CustomInputContainer,
  ErrorText,
  LinkShortnerContainer,
  Loader,
} from "../../styles/Components";
import meteor from "/public/assets/Meteor.png";

interface LinkShortnerProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  shortenURL: () => void;
  error: string;
  isLoading: boolean;
}

const LinkShortner = ({
  handleChange,
  userInput,
  shortenURL,
  error,
  isLoading,
}: LinkShortnerProps) => {
  return (
    <>
      {/*@ts-ignore*/}
      <LinkShortnerContainer image={meteor}>
        <CustomInputContainer>
          <CustomInput
            placeholder="Shorten a link here..."
            style={{ marginRight: "4em" }}
            onChange={handleChange}
            value={userInput || ""}
            required
          />
          {userInput.length === 0 ? <ErrorText>{error}</ErrorText> : null}
        </CustomInputContainer>
        <CustomBtn
          onClick={shortenURL}
          disabled={userInput.length === 0 ? true : false}
        >
          {isLoading ? <Loader /> : "Shorten it!"}
        </CustomBtn>
      </LinkShortnerContainer>
    </>
  );
};

export default LinkShortner;
