import marvelLogo from "../../assets/logo.png";
import fav from "../../assets/fav.svg";

import "./Header.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context";

export const Header: React.FC = () => {
  const { favHeroes } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="banner">
      <img alt="Marvel Logo" style={{ cursor: "pointer" }} onClick={() => navigate("/heroes")} src={marvelLogo} />

      <a onClick={() => navigate("/favs")}>
        <img src={fav}></img>
        <span>{favHeroes && favHeroes.length}</span>
      </a>
    </div>
  );
};
