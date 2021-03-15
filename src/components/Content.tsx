import { MovieCard } from "./MovieCard";
import { GenreResponseProps, MovieProps } from "../types";

import '../styles/content.scss';


interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}


export function Content({ movies, selectedGenre }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}