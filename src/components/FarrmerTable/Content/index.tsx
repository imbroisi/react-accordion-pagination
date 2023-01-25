import Accordion from "lib/Accordion";
import ItemFormatter from "./ItemFormatter";
import SubitemFormatter from "./SubitemFormatter";
import SubitemHeader from "./SubitemHeader";
import { useAPI } from "api/apiContext";
import Header from "../Header";
import Footer from "../Footer";

const Content = () => {
  const { apiData } = useAPI();

  if (!apiData || apiData.length === 0) {
    return null;
  }

  // translate apiData to React format
  const content = apiData.map(({ id, itemData, subItemsData }) => {
    return {
      id,
      item: <ItemFormatter id={id} data={itemData} />,
      subItems: subItemsData.map((data: any) => <SubitemFormatter key={data[0]} data={data} />),
      subItemsHeader: <SubitemHeader />,
    };
  });

  return (
    <>
      <Header />
      <div className="w-full">
        <Accordion content={content} />
      </div>
      <Footer />
    </>
  );
};

export default Content;
