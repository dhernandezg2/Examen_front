import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character, State } from "../routes/characters.tsx";
import { useState } from "preact/hooks";

type Props = {
  data: State;
};

const IslaCharacter: FunctionalComponent<Props> = (props) => {
  const [characters, setCharacters] = useState<Character[]>(
    props.data.characters,
  );

  const añadirFavorito = async (c: Character, event: Event) => {
    event.stopPropagation();
    const response = await fetch("/Cookies/nuevofavorito", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: c.id }),
    });

    if (!response.ok) {
      alert("Error al añadir favorito");
    } else {
      setCharacters(
        characters.map((character) =>
          character.id === c.id ? { ...character, favorite: true } : character
        ),
      );
    }
  };

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
      setCharacters(
        characters.map((character) =>
          character.id === c.id ? { ...character, favorite: false } : character
        ),
      );
    }
  };

  return (
    <div>
      <div class="grid">
        {characters.map((c) => (
          <div
            class="card"
            key={c.id}
            onClick={() => globalThis.location.href = `/character/${c.id}`}
          >
            <img src={c.image} alt={c.name} />
            <h3>{c.name}</h3>
            {!c.favorite
              ? (
                <button
                  type="button"
                  onClick={(event) => añadirFavorito(c, event)}
                >
                  Añadir
                </button>
              )
              : (
                <button
                  type="button"
                  onClick={(event) => quitarFavorito(c, event)}
                >
                Quitar
                </button>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslaCharacter;