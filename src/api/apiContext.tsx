import { useContext, useState, useEffect, createContext, ReactNode, useRef } from "react";
import { processPayload } from "./processPayload";

const APIContext = createContext({
  totalPages: -1,
  apiData: [{
    id: '',
    itemData: [],
    subItemsData: [],
  }],
  getNewPage: (page: number) => {},
});

interface Props {
  children:  ReactNode | ReactNode[],
}

const APIContextProvider = ({ children }: Props)  => {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState(null);
  const totalItems = useRef(-1);
  
  useEffect(() => {
    (async () => {
      const response  = await fetch(`/api-data?total=10&page=${page}`);
      const data = await response.json();

      totalItems.current = data.totalItems;
      setApiData(processPayload(data.items));
    })();
  }, [page]);

  const getNewPage = (newPage: number) => {
    setPage(newPage);
  };
  
  return (
    <APIContext.Provider
      value={{
        apiData: apiData || [],
        getNewPage,
        totalPages: totalItems.current,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export default APIContextProvider;
