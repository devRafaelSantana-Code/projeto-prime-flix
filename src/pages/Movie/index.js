import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import api from "../../services/api";

import "./movie.css";

const STORAGE_KEY = "@meusfilmes";

function Movie() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [movie, setMovie] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [feedback, setFeedback] = useState("");

   useEffect(() => {
      async function loadMovie() {
         if (!/^\d+$/.test(id)) {
            navigate("/not-found", { replace: true });
            return;
         }

         setIsLoading(true);

         try {
            const response = await api.get(`/movie/${id}`, {
               params: {
                  api_key: "4c0ae177969277a6f18d1efdd38622a3",
                  language: "pt-BR",
               },
            });

            setMovie(response.data);
         } catch (error) {
            console.error("Filme não encontrado. Redirecionando...", error);
            navigate("/not-found", { replace: true });
         } finally {
            setIsLoading(false);
         }
      }

      loadMovie();
   }, [id, navigate]);

   function showFeedback(message) {
      setFeedback(message);
      setTimeout(() => setFeedback(""), 3000);
   }

   function saveMovie() {
      if (!movie) return;

      try {
         const storedMovies = localStorage.getItem(STORAGE_KEY);
         const savedMovies =
            storedMovies && storedMovies !== "undefined"
               ? JSON.parse(storedMovies)
               : Array.from({ length: 0 });

         const movieAlreadySaved = savedMovies.some(
            (savedMovie) => savedMovie.id === movie.id,
         );

         if (movieAlreadySaved) {
            showFeedback("Este filme já está na sua lista de favoritos.");
            return;
         }

         const updatedMovies = [...savedMovies, movie];
         localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMovies));
         showFeedback("Filme guardado nos favoritos com sucesso!");
      } catch (error) {
         console.error("Erro ao guardar filme:", error);
         showFeedback("Não foi possível guardar o filme.");
      }
   }

   if (isLoading || !movie) {
      return (
         <div className="loading">
            <div className="spinner" />
            <span>A carregar detalhes do filme...</span>
         </div>
      );
   }

   const releaseYear = movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : null;

   const imageBaseUrl = ["https://image.", "tmdb.org/t/p/original/"].join("");
   const backdropUrl = `${imageBaseUrl}${movie.backdrop_path}`;
   const youtubeBaseUrl = [
      "https://www.",
      "youtube.com",
      "/results?search_query=",
   ].join("");

   const youtubeSearchUrl = `${youtubeBaseUrl}${encodeURIComponent(
      `${movie.title} Trailer`,
   )}`;

   return (
      <section className="movie-details-wrapper">
         <div className="movie-details-card">
            <Link to="/" className="back-link">
               ← Voltar ao catálogo
            </Link>

            <div className="movie-backdrop">
               {movie.backdrop_path ? (
                  <img src={backdropUrl} alt={movie.title} />
               ) : (
                  <div className="backdrop-placeholder">
                     Imagem indisponível
                  </div>
               )}
            </div>

            <div className="movie-content">
               <div className="movie-title-row">
                  <h1>
                     {movie.title} {releaseYear && <span>({releaseYear})</span>}
                  </h1>

                  <div className="movie-rating">
                     ★{" "}
                     {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}{" "}
                     <small>/ 10</small>
                  </div>
               </div>

               {movie.genres && movie.genres.length > 0 && (
                  <div className="movie-genres">
                     {movie.genres.map((genre) => (
                        <span key={genre.id} className="genre-tag">
                           {genre.name}
                        </span>
                     ))}
                  </div>
               )}

               <div className="movie-synopsis">
                  <h2>Sinopse</h2>
                  <p>
                     {movie.overview ||
                        "Sinopse não disponível para este título."}
                  </p>
               </div>

               <div className="buttons-area">
                  <button
                     type="button"
                     className="btn-primary"
                     onClick={saveMovie}
                  >
                     + Guardar nos Favoritos
                  </button>

                  <a
                     className="btn-secondary"
                     href={youtubeSearchUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Ver Trailer no YouTube
                  </a>
               </div>
            </div>
         </div>

         {feedback && <div className="feedback-toast">{feedback}</div>}
      </section>
   );
}

export default Movie;
