import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ({ coin }) => {
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <tr className="h-[80px] border-b">
      <td>
        <button className="outline-none border-none focus-within:outline-none">
          <AiOutlineStar />
        </button>
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coins/${coin.id}`} className="flex items-center gap-3">
          <img src={coin.image} alt={coin.name} className="w-6 rounded-full" />
          <p className="hidden sm:table-cell">{coin.name}</p>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td
        className={`${
          coin.price_change_percentage_24h < 0
            ? "text-red-600"
            : "text-green-600"
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}
      </td>
      <td>${formatter.format(coin.total_volume)}</td>
      <td>${formatter.format(coin.market_cap)}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
