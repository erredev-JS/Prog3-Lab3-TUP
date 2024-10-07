import { Route, Routes } from "react-router-dom";
import { Header } from "../components/ui/Header/Header";
import { Home } from "../components/screens/Home/Home";
import { Search } from "../components/screens/Search/Search";
import { DcHeroes } from "../components/screens/DcHeroes/DcHeroes";
import { MarvelHeroes } from "../components/screens/MarvelHeroes/MarvelHeroes";

export const ProtectedRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/dcHeroes" element={<DcHeroes/>}></Route>
        <Route path="/marvelHeroes" element={<MarvelHeroes />}></Route>
        <Route path="/hero/id" element={<MarvelHeroes />}></Route>

      </Routes>
    </>
  );
};
