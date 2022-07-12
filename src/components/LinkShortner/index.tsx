import {
  CustomBtn,
  CustomInput,
  LinkShortnerContainer,
} from "../../styles/Components";
import meteor from "/public/assets/Meteor.png";

const LinkShortner = () => {
  return (
    // @ts-ignore
    <LinkShortnerContainer image={meteor}>
      <CustomInput
        placeholder="Shorten a link here..."
        style={{ marginRight: "4em" }}
      />
      <CustomBtn>Shorten it!</CustomBtn>
    </LinkShortnerContainer>
  );
};

export default LinkShortner;
