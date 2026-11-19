import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function RoutesApp() {
   return (
      <BrowserRouter>
         <Header />

         <main className="main-content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/movie/:id" element={<Movie />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/not-found" element={<NotFound />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </main>
      </BrowserRouter>
   );
}

export default RoutesApp;
