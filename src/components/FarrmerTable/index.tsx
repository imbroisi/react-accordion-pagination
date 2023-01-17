import APIContextProvider from "api/apiContext";
import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const FarmerTable = () => {
  return (
    <Container>
      <Header />
      <APIContextProvider>
        <Content />
        <Footer />
      </APIContextProvider>
    </Container>
  );
};

export default FarmerTable;
