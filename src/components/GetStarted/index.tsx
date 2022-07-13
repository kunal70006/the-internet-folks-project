import {
  GetStartedBtn,
  HeaderText,
  LinkShortnerContainer,
} from "../../styles/Components";
import meteor from "/public/assets/Meteor.png";

const GetStarted = () => {
  return (
    <LinkShortnerContainer
      // @ts-ignore
      image={meteor}
      style={{
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeaderText style={{ color: "white", fontSize: 32, marginBottom: "1em" }}>
        Boost your links today
      </HeaderText>
      <GetStartedBtn>Get Started</GetStartedBtn>
    </LinkShortnerContainer>
  );
};

export default GetStarted;
