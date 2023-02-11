// Fetch Coins
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&page=${page}&per_page=10
export const fetchCoins = async (page) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&page=${page}&per_page=10&sparkline=true`
    );
    return response.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
