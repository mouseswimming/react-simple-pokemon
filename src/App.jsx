import { useEffect, useRef, useState } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Navigation from "./Navigation";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [curPage, setCurPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [isLoading, setIsLoading] = useState(true);
  const nextPage = useRef("");
  const prevPage = useRef("");

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    axios.get(curPage, { signal: controller.signal }).then((resp) => {
      setPokemons(resp.data.results);
      nextPage.current = resp.data.next;
      prevPage.current = resp.data.previous;

      setIsLoading(false);
    });

    return () => controller.abort();
  }, [curPage]);

  function gotoNextPage() {
    setCurPage(nextPage.current);
  }

  function gotoPrevPage() {
    setCurPage(prevPage.current);
  }

  if (isLoading) return "Loading...";

  return (
    <>
      <div className="container m-auto mt-10">
        <PokemonList pokemons={pokemons} />
        <Navigation
          prevHandler={prevPage.current ? gotoPrevPage : null}
          nextHandler={nextPage.current ? gotoNextPage : null}
        />
      </div>
    </>
  );
}

export default App;
