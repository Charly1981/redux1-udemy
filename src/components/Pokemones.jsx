import React from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
} from "../redux/pokeDucks";

const Pokemones = () => {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.pokemones lo sacamos de la tienda
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  return (
    <div>
      <h1>Pokemones!</h1>

      <br />

      {pokemones.length === 0 && (
        <button onClick={() => dispatch(obtenerPokemonesAccion())}>
          Obtener
        </button>
      )}

      {next && (
        <button onClick={() => dispatch(siguientePokemonAccion())}>
          Siguiente
        </button>
      )}

      {previous && (
        <button onClick={() => dispatch(anteriorPokemonAccion())}>
          Anterior
        </button>
      )}

      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
