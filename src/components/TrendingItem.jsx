import bitCoin from "../assets/bitcoin.webp";

const TrendingItem = ({ coin }) => {
  return (
    <div className="border border-secondary rounded-2xl shadow-xl bg-primary p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={coin.small} alt={coin.name} className="w-12 rounded-full" />
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{coin.name}</h3>
            <p>{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={bitCoin} alt="bitcoin icon" className="w-6 rounded-full" />
          <p>{coin.price_btc.toFixed(6)}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
