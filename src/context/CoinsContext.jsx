import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../utils/fetchData";

export const CoinsContext = createContext();

export const CoinsContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const { isLoading, error, data, isPreviousData, isFetching } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    keepPreviousData: true,
  });

  return (
    <CoinsContext.Provider
      value={{
        data,
        isLoading,
        error,
        page,
        isFetching,
        isPreviousData,
        setPage,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};
