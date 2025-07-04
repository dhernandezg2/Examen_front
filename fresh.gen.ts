// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $Cookies_getCookie from "./routes/Cookies/getCookie.ts";
import * as $Cookies_nuevofavorito from "./routes/Cookies/nuevofavorito.ts";
import * as $Cookies_quitarfavorito from "./routes/Cookies/quitarfavorito.ts";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $character_character_ from "./routes/character/[character].tsx";
import * as $characters from "./routes/characters.tsx";
import * as $favorites from "./routes/favorites.tsx";
import * as $index from "./routes/index.tsx";
import * as $Character from "./islands/Character.tsx";
import * as $FavChar from "./islands/FavChar.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/Cookies/getCookie.ts": $Cookies_getCookie,
    "./routes/Cookies/nuevofavorito.ts": $Cookies_nuevofavorito,
    "./routes/Cookies/quitarfavorito.ts": $Cookies_quitarfavorito,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/character/[character].tsx": $character_character_,
    "./routes/characters.tsx": $characters,
    "./routes/favorites.tsx": $favorites,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Character.tsx": $Character,
    "./islands/FavChar.tsx": $FavChar,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
