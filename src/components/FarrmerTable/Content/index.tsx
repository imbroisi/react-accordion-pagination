import Accordion from "lib/Accordion";
import ItemFormatter from "./ItemFormatter";
import SubitemFormatter from "./SubitemFormatter";
import SubitemHeader from "./SubitemHeader";
import { useAPI } from "api/apiContext";

const Content = () => {
  const { traiveData } = useAPI();

  if (!traiveData || traiveData.length === 0) {
    return null;
  }

  // translate traiveData to React format
  const content = traiveData.map(({ id, itemData, subItemsData }) => {
    return {
      id,
      item: <ItemFormatter id={id} data={itemData} />,
      subItems: subItemsData.map((data: any) => <SubitemFormatter key={data[0]} data={data} />),
      subItemsHeader: <SubitemHeader />,
    };
  });

  return (
    <div className="w-full">
      <Accordion content={content} />
    </div>
  );
};

export default Content;
