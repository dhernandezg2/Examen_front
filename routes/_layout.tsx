import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  // do something with state here
  return (
    <div>
      <Header />
      <Component />
    </div>
  );
}
