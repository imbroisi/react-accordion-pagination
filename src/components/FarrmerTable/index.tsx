import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const FarmerTable = () => {
  const headerLabels: string[] = [
    'Farmer',
    'Amount Requested',
    'Status',
    'Due Date',
    'Actions',
  ];

  // const fieldsLabels = [

  // ];

  return (
    <Container>
      <Header labels={headerLabels}/>
      <Content />
      <Footer />
    </Container>
  );
};

export default FarmerTable;
