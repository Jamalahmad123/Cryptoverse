import CoinItem from "./CoinItem";

const CoinList = ({ coins }) => {
  return (
    <div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Valume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
