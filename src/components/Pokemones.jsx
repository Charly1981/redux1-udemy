import React from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  unPokeDetalleAccion,
} from "../redux/pokeDucks";
import Detalle from "./Detalle";

const Pokemones = () => {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.pokemones lo sacamos de la tienda
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  React.useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerPokemonesAccion());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Lista de Pokemones</h3>

        <br />

        <div className="d-flex justify-content-between">
          {pokemones.length === 0 && (
            <button
              onClick={() => dispatch(obtenerPokemonesAccion())}
              className="btn btn-dark"
            >
              Obtener
            </button>
          )}

          {next && (
            <button
              onClick={() => dispatch(siguientePokemonAccion())}
              className="btn btn-dark"
            >
              Siguiente
            </button>
          )}

          {previous && (
            <button
              onClick={() => dispatch(anteriorPokemonAccion())}
              className="btn btn-dark"
            >
              Anterior
            </button>
          )}
        </div>

        <ul className="list-group mt-3">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase">
              {item.name}
              <button
                className="btn btn-dark btn-sm float-right"
                onClick={() => dispatch(unPokeDetalleAccion(item.url))}
              >
                Info
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h3>Detalle Pokemon</h3>
        <Detalle />
      </div>
    </div>
  );
};

export default Pokemones;
