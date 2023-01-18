import APIContextProvider from "api/apiContext";
import Container from "./Container";
import Content from "./Content";

const FarmerTable = () => {
  return (
    <Container>
      <APIContextProvider>
        <Content />
      </APIContextProvider>
    </Container>
  );
};

export default FarmerTable;
