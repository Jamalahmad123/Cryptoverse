import { useContext } from "react";
import { CoinsContext } from "../context/CoinsContext";

const Pagination = () => {
  const { data, isFetching, isPreviousData, page, setPage } =
    useContext(CoinsContext);

  const prevPage = () => setPage((old) => Math.max(old - 1, 1));

  const nextPage = () => {
    if (!isPreviousData && data.next) {
      setPage((old) => old + 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-button text-btnText p-3 rounded-2xl shadow-xl text-lg font-semibold text-center"
        onClick={prevPage}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <div className="mx-8 block text-lg font-bold">{page}</div>
      <button
        className="bg-button text-btnText p-3 rounded-2xl shadow-xl text-lg font-semibold text-center"
        onClick={nextPage}
        disabled={isPreviousData || !data?.next}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
