import { FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { getCookie } from "./Cookies/getCookie.ts";
import Character from "../islands/Character.tsx";

export type State = {
  username: string;
  characters: Character[];
}

export type Character = {
  id: string;
  name: string;
  house: string;
  image: string;
  favorite?: boolean;
}


export async function handler(req: Request, ctx: FreshContext<State>) {
  const personajesAPI = await Axios.get("https://hp-api.onrender.com/api/characters");
  const cookieHeader = req.headers.get("cookie");
  const favoritesCookie = getCookie(cookieHeader, "favorites");
  const favoritos = favoritesCookie ? favoritesCookie.split(",") : [];

  const personajes: Character[] = personajesAPI.data.map((c: Character) => ({
    ...c,
    favorite: favoritos.includes(c.id),
  }));

  return ctx.render({
    username: ctx.state.username,
    characters: personajes,
  });
}
export default function Home(props: PageProps<State>) {
  return (
    <Character data={props.data} />
  );
}