import { FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import ComponenteCharacter from "../../components/Character.tsx";


export type _State = {
  characters: _Character;
};

export type _Character = {
  id: string;
  name: string;
  house: string;
  image: string;
};

export async function handler(
  _req: Request,
  ctx: FreshContext<_State>,
) {
  const { character } = ctx.params;

  const buscarCharacterAPI = await Axios.get(
    `https://hp-api.onrender.com/api/character/${character}`,
  );

  return ctx.render({
    characters: buscarCharacterAPI.data[0],
  });
}

export default function Home(props: PageProps<_State>) {
  return <ComponenteCharacter data={props.data} />;
}