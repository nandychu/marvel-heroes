import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './HeroCard.scss'
export interface HeroCardProps {
  hero: any;
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const [loadedImg, setLoadedImg] = useState(false);
  const navigate = useNavigate();

  const handleImageLoaded = () => {
    setLoadedImg(true);
  };

  return (
    <div className="hero-card-container">
      <img
        className="hero-card-img"
        onClick={() => {
          navigate(`/description/${hero.id}`);
        }}
        style={{
          opacity: loadedImg ? 1 : 0,
        }}
        src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
        onLoad={handleImageLoaded}
        alt="Imagen"
      />

      <div className="nameWrapper">
        <div className="nameWrapperInner">
          <span>{hero.name}</span>
        </div>
      </div>
    </div>
  );
};
