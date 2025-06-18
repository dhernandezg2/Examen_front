import { FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { getCookie } from "./Cookies/getCookie.ts";
import IslaFavoritesCharacters from "../islands/FavChar.tsx";

export type State = {
  characters: Character[];
};

export type Character = {
  id: string;
  name: string;
  house: string;
  image: string;
  favorite?: boolean;
};


export async function handler(req: Request, ctx: FreshContext<State>) {
  const cookieHeader = req.headers.get("cookie");
  const favoritesCookie = getCookie(cookieHeader, "favorites");
  const favoritos = favoritesCookie ? favoritesCookie.split(",") : [];

  if( favoritos.length === 0) {
    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/characters");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  }

  const charactersAPI = await Axios.get("https://hp-api.onrender.com/api/characters");
  const personajes = charactersAPI.data.filter((c: Character) =>
    favoritos.includes(c.id)
  );

  return ctx.render({
    characters: personajes,
  });
}

export default function Home(props: PageProps<State>) {
  return <IslaFavoritesCharacters data={props.data} />;
}
