const SearchCoin = ({ inputText, setInputText }) => {
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex items-center justify-between flex-col gap-4 sm:flex-row">
      <h2 className="text-xl sm:text-2xl font-bold">Search Crypto</h2>
      <form>
        <input
          type="text"
          value={inputText}
          onChange={onChange}
          className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
          placeholder="search coins"
        />
      </form>
    </div>
  );
};

export default SearchCoin;
