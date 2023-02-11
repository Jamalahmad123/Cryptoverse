import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Spinner from "../components/Spinner";
import Wrapper from "../components/Wrapper";

const CoinPage = () => {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { coinId } = useParams();

  const fetchCoinData = async (coinId) => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`
    );
    const data = await response.json();
    setCoinData(data);
    // console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoinData(coinId);
  }, [coinId]);

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="mt-8">
      <Wrapper classes="p-8 space-y-14">
        <header className="flex items-center gap-4">
          <img
            src={coinData.image?.large}
            alt={coinData.name}
            className="w-20 rounded-full"
          />
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {coinData.name}
            </h2>
            <p>({coinData.symbol?.toUpperCase()} / USD)</p>
          </div>
        </header>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-2xl font-bold">
                ${coinData.market_data?.current_price.usd}
              </h3>
              <p>7 days</p>
            </div>
            <div className="w-full">
              <Sparklines data={coinData.market_data?.sparkline_7d?.price}>
                <SparklinesLine style={{ strokeWidth: 1, stroke: "teal" }} />
              </Sparklines>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-gray-500 text-sm">Market Cap</p>
                  <p className="text-lg font-bold">
                    {formatter.format(coinData.market_data?.market_cap.usd)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">High (24h)</p>
                  <p className="text-lg font-bold">
                    {formatter.format(coinData.market_data?.high_24h.usd)}
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-500 text-sm">Valume (24h)</p>
                  <p className="text-lg font-bold">
                    {formatter.format(coinData.market_data?.total_volume.usd)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Low (24h)</p>
                  <p className="text-lg font-bold">
                    {formatter.format(coinData.market_data?.low_24h.usd)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-lg sm:text-2xl font-bold">Market Stats</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-gray-500 text-sm">Market Rank</p>
                <p>{coinData.market_cap_rank}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Hashing Algorithm</p>
                <p>{coinData.hashing_algorithm}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Trust Score</p>
                <p>{coinData.liquidity_score}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (24h)</p>
                <p>
                  {coinData.market_data?.price_change_percentage_24h.toFixed(3)}
                  %
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (7d)</p>
                <p>
                  {coinData.market_data?.price_change_percentage_7d.toFixed(3)}%
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (14d)</p>
                <p>
                  {coinData.market_data?.price_change_percentage_14d.toFixed(3)}
                  %
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (30d)</p>
                <p>
                  {coinData.market_data?.price_change_percentage_30d.toFixed(3)}
                  %
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (60d)</p>
                <p>
                  {coinData.market_data?.price_change_percentage_60d.toFixed(3)}
                  %
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (1y)</p>
                <p>
                  {coinData.market_data?.price_change_percentage_1y.toFixed(3)}%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            About {coinData.name}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: coinData.description?.en }}></p>
        </div>
      </Wrapper>
    </main>
  );
};

export default CoinPage;
