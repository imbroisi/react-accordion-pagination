import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const headerLabels = [
  'Farmer',
  'Amount Requested',
  'Status',
  'Due Date',
  'Actions',
];

const FarmerTable = () => {
  return (
    <Container>
      <Header labels={headerLabels} />
      <Content />
      <Footer />
    </Container>
  );
};

export default FarmerTable;
