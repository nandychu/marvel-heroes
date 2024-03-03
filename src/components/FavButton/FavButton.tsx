import { useContext } from "react";
import favLogo from "../../assets/fav.png";
import unfavLogo from "../../assets/unfav.png";
import { MyContext } from "../../context";
import './FavButton.scss'
export interface FavButtonProps {
  hero: any;
  descriptionStyles?: boolean;
}

export const FavButton: React.FC<FavButtonProps> = ({ hero, descriptionStyles }) => {
  const { addFav, removeFav, favHeroes } = useContext(MyContext);

  function isFav(itemId: any) {
    const exists = favHeroes.some((fav: any) => fav.id === itemId);
    return exists;
  }

  return (
    <a
      className="fav-button-wrapper"
    >
      <img
        className="fav-img"
        onClick={() => {
          addFav(hero);
        }}
        style={{
          opacity: isFav(hero.id) ? 1 : 0,
          position: "absolute",
        }}
        src={favLogo}
        alt="Favorito"
      />
      <img
        className="fav-img"
        onClick={() => {
          console.log("addfav");
          removeFav(hero.id);
        }}
        style={{
          opacity: isFav(hero.id) ? 0 : 1,
        }}
        src={unfavLogo}
        alt="No favorito"
      />
    </a>
  );
};
