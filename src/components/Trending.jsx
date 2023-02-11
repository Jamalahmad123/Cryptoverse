import { useEffect, useState } from "react";
import TrendingItem from "./TrendingItem";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const data = await response.json();
    setTrendingCoins(data.coins);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold">Trending Coins</h2>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingCoins.map(({ item }) => (
          <TrendingItem key={item.id} coin={item} />
        ))}
      </div>
    </div>
  );
};

//

export default Trending;
