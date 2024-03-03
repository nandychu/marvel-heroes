import { useContext } from "react";
import { MyContext } from "../context";
import { FavButton } from "../components/FavButton/FavButton";
import { motion } from "framer-motion";
import "./pageStyles.scss";
export const HeroDescriptionPage: React.FC = () => {
  const { selectedHeroeComics, selectedHeroe } = useContext(MyContext);

  function parseDate(date: string) {
    return new Date(date).getFullYear();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
      transition={{ duration: 0.5 }}
    >
      <div className="heroe-desc-container">
        {selectedHeroe && (
          <div className="heroe-desc-wrapper">
            <div>
              <img src={`${selectedHeroe.thumbnail?.path}.${selectedHeroe.thumbnail?.extension}`} />
              <div style={{ textAlign: "start", marginLeft: 52 }}>
                <div>
                  <p className="hero-desc-name">{selectedHeroe.name}</p>
                  <FavButton hero={selectedHeroe}></FavButton>
                </div>
                <p>{selectedHeroe.description}</p>
              </div>
            </div>
          </div>
        )}
        <div className="heroe-desc-header">
          <h2>COMICS</h2>
        </div>

        <div className="hero-desc-comics-wrapper">
          {selectedHeroeComics.map((comic: any) => (
            <div>
              <img src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`} />
              <p>{comic.title}</p>
              <p>{parseDate(comic.dates[0].date)}</p>
            </div>
          ))}
          {selectedHeroeComics && selectedHeroeComics[0]?.title}
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};
