import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./home.css";

function Home() {
   const [movies, setMovies] = useState(Array.from({ length: 0 }));
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);
   const [totalPages, setTotalPages] = useState(1);

   useEffect(() => {
      async function loadMovies() {
         setIsLoading(true);

         try {
            const response = await api.get("movie/top_rated", {
               params: {
                  api_key: "4c0ae177969277a6f18d1efdd38622a3",
                  language: "pt-BR",
                  page,
               },
            });

            setMovies(
               Array.isArray(response.data.results)
                  ? response.data.results
                  : Array.from({ length: 0 }),
            );

            const apiTotalPages = response.data.total_pages || 1;
            setTotalPages(Math.min(apiTotalPages, 500));

            window.scrollTo({
               top: 0,
               behavior: "smooth",
            });
         } catch (error) {
            console.error("Erro ao carregar filmes:", error);
         } finally {
            setIsLoading(false);
         }
      }

      loadMovies();
   }, [page]);

   if (isLoading) {
      return (
         <div className="loading">
            <div className="spinner" />
            <span>A carregar catálogo de filmes...</span>
         </div>
      );
   }

   const imageBaseUrl = ["https://image.", "tmdb.org/t/p/original/"].join("");

   return (
      <section className="home-container">
         <div className="home-header">
            <h1>Filmes Mais Bem Avaliados</h1>
            <p>Descubra as obras mais aclamadas pelo público e pela crítica.</p>
         </div>

         <div className="movie-list">
            {movies.map((movie) => {
               const posterUrl = `${imageBaseUrl}${movie.poster_path}`;

               return (
                  <article key={movie.id} className="movie-card">
                     <Link to={`/movie/${movie.id}`} className="poster-wrapper">
                        {movie.poster_path ? (
                           <img
                              src={posterUrl}
                              alt={movie.title}
                              loading="lazy"
                           />
                        ) : (
                           <div className="poster-placeholder">Sem imagem</div>
                        )}
                        <span className="rating-badge">
                           ★{" "}
                           {movie.vote_average
                              ? movie.vote_average.toFixed(1)
                              : "N/A"}
                        </span>
                     </Link>

                     <div className="movie-card-info">
                        <strong title={movie.title}>{movie.title}</strong>
                        <Link to={`/movie/${movie.id}`} className="details-btn">
                           Ver detalhes
                        </Link>
                     </div>
                  </article>
               );
            })}
         </div>

         <div className="pagination-container">
            <span className="current-page">
               Página {page} de {totalPages}
            </span>

            <div className="pagination-buttons">
               <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setPage(1)}
                  disabled={page === 1}
               >
                  Inicial
               </button>

               <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
               >
                  Anterior
               </button>

               <button
                  type="button"
                  className="pagination-button"
                  onClick={() =>
                     setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={page === totalPages}
               >
                  Próxima
               </button>

               <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setPage(totalPages)}
                  disabled={page === totalPages}
               >
                  Última
               </button>
            </div>
         </div>
      </section>
   );
}

export default Home;
