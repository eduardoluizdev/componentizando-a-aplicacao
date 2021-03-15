import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface Ranting {
  Source: string;
  Value: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Ranting[];
  Runtime: string;
}

interface ContentProps {
  movies: MovieProps[];
  titleGender: string;
}


export function Content(props: ContentProps) {
  const { titleGender, movies } = props

  return (
    <>
      <header>
        <span className="category">Categoria:<span> {titleGender}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  )
}