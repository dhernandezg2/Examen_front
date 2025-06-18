import { getCookie } from "./getCookie.ts";


export async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Error");
  }

  const body = await req.json();
  const { id } = body;

  const cookieHeader = req.headers.get("cookie");
  const favoritesCookie = getCookie(cookieHeader, "favorites");
  const favoritos = favoritesCookie ? favoritesCookie.split(",") : [];

  if (!favoritos.includes(id)) {
    favoritos.push(id);
  }

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `favorites=${favoritos.join(",")}; Path=/; HttpOnly; Max-Age=604800`, // Cookie válida por 7 días
  );

  return new Response(JSON.stringify({ message: "añadido" }), {
    status: 200,
    headers,
  });
}