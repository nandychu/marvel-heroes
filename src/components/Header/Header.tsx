import marvelLogo from "../../assets/logo.png";
import fav from "../../assets/fav.png";

import "./Header.scss";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const { favs } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="banner">
      <img style={{ cursor: "pointer" }} onClick={() => navigate("/heroes")} src={marvelLogo} />

      <a onClick={() => navigate("/favs")} style={{ color: "white", display: "flex", alignItems: "center" }}>
        <img src={fav}></img>
        <span>{favs && favs.length}</span>
      </a>
    </div>
  );
};
