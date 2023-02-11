import Wrapper from "../components/Wrapper";
import SearchCoin from "../components/SearchCoin";
import CoinList from "../components/CoinList";
import { useContext, useState } from "react";
import Trending from "../components/Trending";
import { CoinsContext } from "../context/CoinsContext";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

const Home = () => {
  const { data, isLoading, error } = useContext(CoinsContext);

  const [inputText, setInputText] = useState("");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  const updtCoins = data.filter((value) => {
    if (inputText === "") {
      return value;
    } else if (value.name.toLowerCase().includes(inputText.toLowerCase())) {
      return value;
    }
  });

  return (
    <main className="mt-8">
      <Wrapper classes="space-y-8 p-6">
        <SearchCoin inputText={inputText} setInputText={setInputText} />
        <CoinList coins={updtCoins} />
        <Pagination />
      </Wrapper>
      <Wrapper classes="p-6 mt-8">
        <Trending />
      </Wrapper>
    </main>
  );
};

export default Home;
