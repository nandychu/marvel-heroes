import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context";
import SearchIcon from "../../assets/search-icon.png";
import "./SearchBar.scss";

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const { heroSearchValue, setHeroSearchValue, heroes } = useContext(MyContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue !== undefined) {
        setHeroSearchValue(searchValue);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {
    setSearchValue(heroSearchValue);
  }, []);

  const handleInputChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-container">
      <div>
        <input
          value={searchValue}
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="Buscar..."
        />
        <img src={SearchIcon} />
      </div>
      <p>{heroes.length} RESULTS</p>
    </div>
  );
};
