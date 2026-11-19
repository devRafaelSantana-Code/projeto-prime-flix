import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./favorites.css";

const STORAGE_KEY = "@meusfilmes";

function Favorites() {
   const [movies, setMovies] = useState(Array.from({ length: 0 }));

   useEffect(() => {
      const storedMovies = localStorage.getItem(STORAGE_KEY);

      if (!storedMovies || storedMovies === "undefined") {
         setMovies(Array.from({ length: 0 }));
         return;
      }

      try {
         const parsedMovies = JSON.parse(storedMovies);
         setMovies(
            Array.isArray(parsedMovies)
               ? parsedMovies
               : Array.from({ length: 0 }),
         );
      } catch (error) {
         console.error("Erro ao carregar os filmes guardados:", error);
         setMovies(Array.from({ length: 0 }));
      }
   }, []);

   function handleDelete(movieId) {
      const filteredMovies = movies.filter((movie) => movie.id !== movieId);
      setMovies(filteredMovies);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredMovies));
   }

   const imageBaseUrl = ["https://image.", "tmdb.org/t/p/original/"].join("");

   return (
      <section className="favorites">
         <div className="favorites-header">
            <h1>Meus Filmes Favoritos</h1>
            <p>
               {movies.length > 0
                  ? `Tem ${movies.length} ${
                       movies.length === 1
                          ? "filme guardado"
                          : "filmes guardados"
                    } na sua lista.`
                  : "A sua lista pessoal está vazia de momento."}
            </p>
         </div>

         {movies.length === 0 ? (
            <div className="empty-favorites">
               <span>Ainda não guardou nenhum filme.</span>
               <Link to="/" className="explore-btn">
                  Explorar Filmes
               </Link>
            </div>
         ) : (
            <ul className="favorites-list">
               {movies.map((movie) => {
                  const posterUrl = `${imageBaseUrl}${movie.poster_path}`;

                  return (
                     <li key={movie.id} className="favorite-item">
                        <div className="favorite-movie-info">
                           {movie.poster_path && (
                              <img src={posterUrl} alt={movie.title} />
                           )}
                           <div>
                              <strong>{movie.title}</strong>
                              {movie.vote_average > 0 && (
                                 <span className="favorite-rating">
                                    ★ {movie.vote_average.toFixed(1)}
                                 </span>
                              )}
                           </div>
                        </div>

                        <div className="buttons">
                           <Link to={`/movie/${movie.id}`} className="btn-view">
                              Ver detalhes
                           </Link>

                           <button
                              type="button"
                              className="btn-remove"
                              onClick={() => handleDelete(movie.id)}
                           >
                              Remover
                           </button>
                        </div>
                     </li>
                  );
               })}
            </ul>
         )}
      </section>
   );
}

export default Favorites;
