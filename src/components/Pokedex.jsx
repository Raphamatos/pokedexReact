/* eslint-disable react/prop-types */
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

function Pokedex(props) {
  // eslint-disable-next-line react/prop-types

  const { pokemons, loading, page, totalPages, setPage } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page+1 !== totalPages ) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="pokedex-header">
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div> Carregando...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            // eslint-disable-next-line react/prop-types
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
}
export default Pokedex;
