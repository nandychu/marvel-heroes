import { HeroCard } from "../HeroCard/HeroCard";
import './HeroesGrid.scss'
export interface HeroesGridProps {
  heroes: [];
}

export const HeroesGrid: React.FC<HeroesGridProps> = (props) => {
  const { heroes } = props;

  return (
    <div className="heroes-grid-container">
      {heroes && heroes.length > 0 && heroes.map((el: any) => <HeroCard hero={el}></HeroCard>)}
    </div>
  );
};
