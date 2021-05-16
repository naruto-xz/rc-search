import React, {useState} from "react";
import "./icon-svgs";
import "./index.css";

interface SearchProps {
  value?: string;
  placeholder?: string;
  onSearch: (value?: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "请输入",
  value = "",
  onSearch,
}) => {
  const [inputVal, setInputVal] = useState<string>(value);

  const clickSearch = () => {
    onSearch(inputVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSearch(inputVal);
    }
  };

  return (
    <div className="aio-rc-search">
      <input
        type="text"
        value={inputVal}
        placeholder={placeholder}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <span className="search-icon" onClick={clickSearch}>
        <svg width="1em" height="1em" fill="currentColor">
          <use xlinkHref="#icon-sousuo" />
        </svg>
      </span>
    </div>
  );
};
export default Search;
