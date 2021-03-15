import { Button } from './Button'
import '../styles/sidebar.scss';

type GenderProps = {
  id: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
}

interface SideBarProps {
  genres: GenderProps[];
  selectedGenreId: number;
  handleClick: Function;
}

export function SideBar(props: SideBarProps) {
  const { genres, handleClick, selectedGenreId } = props;

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            selected={selectedGenreId === genre.id}
            onClick={() => handleClick(genre.id)}
          />
        ))}
      </div>

    </nav>
  )
}
