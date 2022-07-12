import {
  CustomBtn,
  HeaderText,
  LinkShortnerContainer,
} from "../../styles/Components";
import meteor from "/public/assets/Meteor.png";

const GetStarted = () => {
  return (
    <LinkShortnerContainer
      // @ts-ignore
      image={meteor}
      style={{ margin: "auto", flexDirection: "column" }}
    >
      <HeaderText style={{ color: "white", fontSize: 32, marginBottom: "1em" }}>
        Boost your links today
      </HeaderText>
      <CustomBtn style={{ borderRadius: "32px" }}>Get Started</CustomBtn>
    </LinkShortnerContainer>
  );
};

export default GetStarted;
