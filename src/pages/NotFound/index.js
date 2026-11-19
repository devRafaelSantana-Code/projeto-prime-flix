import { Link } from "react-router-dom";

import "./notFound.css";

function NotFound() {
   return (
      <section className="not-found">
         <div className="not-found-card">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>
               O endereço que procura não existe ou o filme foi removido do
               catálogo.
            </p>
            <Link to="/">Voltar para o início</Link>
         </div>
      </section>
   );
}

export default NotFound;
