import React from "react";
import "./icon-svgs";
import "./index.css";
interface SearchProps {
    value?: string;
    placeholder?: string;
    onSearch: (value?: string) => void;
}
declare const Search: React.FC<SearchProps>;
export default Search;
