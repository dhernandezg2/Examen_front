import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character, State } from "../routes/characters.tsx";
import { useState } from "preact/hooks";

type Props = {
  data: State;
};

const IslaFavoritesCharacters: FunctionalComponent<Props> = (props) => {
  const [characters, setCharacters] = useState<Character[]>(
    props.data.characters,
  );

  const quitarFavorito = async (c: Character, event: Event) => {
    event.stopPropagation();
    const response = await fetch("/Cookies/quitarfavorito", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: c.id }),
    });

    if (!response.ok) {
      alert("Error al quitar favorito");
    } else {
      setCharacters(characters.filter((character) => character.id !== c.id));
      if (characters.length === 1) {
        alert("No tienes favoritos, por favor, añade alguno.");
        document.cookie = "favorites=; Path=/; HttpOnly; Max-Age=0";
        globalThis.location.href = "/characters";
      }
    }
  };

  return (
    <div>
      <div class="grid">
        {characters.map((c) => (
          <div class="card" key={c.id} onClick={() => globalThis.location.href = `/character/${c.id}`} >
            <img src={c.image} alt={c.name} />
            <h3>{c.name}</h3>
            <button type="button" onClick={(e) => quitarFavorito(c, e)}>
               Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslaFavoritesCharacters;
